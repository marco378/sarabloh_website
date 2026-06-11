"use client";

import { useEffect, useRef, useState } from "react";

// ─── GLSL Shaders ─────────────────────────────────────────────────────
const VS = `#version 300 es
in vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`;

const FS = `#version 300 es
precision highp float;
uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;
out vec4 fragColor;
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
vec2 rotate(vec2 uv, float th) { return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv; }
float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); }
float noise(vec2 st) {
  vec2 i = floor(st); vec2 f = fract(st);
  float a = random(i); float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0)); float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
  vec3 color1 = c1.rgb * c1.a; vec3 color2 = c2.rgb * c2.a; vec3 color3 = c3.rgb * c3.a;
  float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
  float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);
  vec3 bc2 = mix(color1, color2, r1); float bo2 = mix(c1.a, c2.a, r1);
  return vec4(mix(bc2, color3, r2), mix(bo2, c3.a, r2));
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = .5 * u_time;
  float ns = .0005 + .006 * u_scale;
  uv -= .5; uv *= (ns * u_resolution); uv = rotate(uv, u_rotation * .5 * PI); uv /= u_pixelRatio; uv += .5;
  float n1 = noise(uv + t); float n2 = noise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle); uv.y += 4. * u_distortion * n2 * sin(angle);
  float iters = ceil(clamp(u_swirlIterations, 1., 30.));
  for (float i = 1.; i <= 30.0; i++) {
    if (i > iters) break;
    uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
    uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
  }
  float prop = clamp(u_proportion, 0., 1.); float shape = 0.; float mixer = 0.;
  if (u_shape < .5) {
    vec2 cuv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(cuv.x) * cos(cuv.y);
    mixer = shape + .48 * sign(prop - .5) * pow(abs(prop - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 suv = uv * (.25 + 3. * u_shapeScale);
    float f = fract(suv.y); shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
    mixer = shape + .48 * sign(prop - .5) * pow(abs(prop - .5), .5);
  } else {
    float sh = 1. - uv.y; sh -= .5; sh /= (ns * u_resolution.y); sh += .5;
    float ss = .2 * (1. - u_shapeScale);
    shape = smoothstep(.45 - ss, .55 + ss, sh + .3 * (prop - .5)); mixer = shape;
  }
  vec4 cm = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);
  fragColor = vec4(cm.rgb, cm.a);
}`;

// ─── Prism Preset ────────────────────────────────────────────────────
const PRISM = {
  u_scale: 0.01,
  u_rotation: (-50 * Math.PI) / 180,
  u_color1: [5 / 255, 5 / 255, 5 / 255, 1],
  u_color2: [102 / 255, 179 / 255, 255 / 255, 1],
  u_color3: [1, 1, 1, 1],
  u_proportion: 0.01,
  u_softness: 0.47,
  u_distortion: 0,
  u_swirl: 0.5,
  u_swirlIterations: 16,
  u_shapeScale: 0.45,
  u_shape: 0,
};

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function link(gl: WebGL2RenderingContext) {
  const v = compile(gl, gl.VERTEX_SHADER, VS);
  const f = compile(gl, gl.FRAGMENT_SHADER, FS);
  if (!v || !f) return null;
  const p = gl.createProgram()!;
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  gl.deleteShader(v);
  gl.deleteShader(f);
  return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
}

interface AnimatedGradientProps {
  speed?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function AnimatedGradient({
  speed = 1.5,
  style = {},
  className = "",
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [session, setSession] = useState(0);

  useEffect(() => {
    const refresh = () => setSession((value) => value + 1);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) refresh();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
        if (nav?.type === "back_forward") refresh();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { antialias: false, alpha: true });
    if (!gl) return;

    const prog = link(gl);
    if (!prog) return;

    // Fullscreen quad
    const pos = gl.getAttribLocation(prog, "a_position");
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const u: Record<string, WebGLUniformLocation | null> = {};
    const names = [
      "u_time", "u_pixelRatio", "u_resolution", "u_scale", "u_rotation",
      "u_color1", "u_color2", "u_color3", "u_proportion", "u_softness",
      "u_shape", "u_shapeScale", "u_distortion", "u_swirl", "u_swirlIterations",
    ];
    names.forEach((n) => (u[n] = gl.getUniformLocation(prog, n)));

    let totalTime = (1000 / 120) * -299 * 10; // Prism time offset
    let lastFrame = performance.now();
    let raf: number;

    const render = (now: number) => {
      const dt = now - lastFrame;
      lastFrame = now;
      totalTime += dt * speed;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);

      gl.uniform1f(u.u_time, totalTime * 0.001);
      gl.uniform1f(u.u_pixelRatio, dpr);
      gl.uniform2f(u.u_resolution, w, h);
      gl.uniform1f(u.u_scale, PRISM.u_scale);
      gl.uniform1f(u.u_rotation, PRISM.u_rotation);
      gl.uniform4fv(u.u_color1, PRISM.u_color1);
      gl.uniform4fv(u.u_color2, PRISM.u_color2);
      gl.uniform4fv(u.u_color3, PRISM.u_color3);
      gl.uniform1f(u.u_proportion, PRISM.u_proportion);
      gl.uniform1f(u.u_softness, PRISM.u_softness);
      gl.uniform1f(u.u_shape, PRISM.u_shape);
      gl.uniform1f(u.u_shapeScale, PRISM.u_shapeScale);
      gl.uniform1f(u.u_distortion, PRISM.u_distortion);
      gl.uniform1f(u.u_swirl, PRISM.u_swirl);
      gl.uniform1f(u.u_swirlIterations, PRISM.u_swirlIterations);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      gl.deleteProgram(prog);
    };
  }, [speed, session]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at 20% 20%, rgba(102,179,255,0.22) 0%, rgba(102,179,255,0.08) 22%, rgba(2,10,24,0.98) 62%), linear-gradient(135deg, #02111f 0%, #06162b 45%, #0b2a5b 100%)",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
