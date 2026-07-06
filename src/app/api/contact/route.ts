import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  weAre?: string;
  collaboration?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Resend is not configured on the server." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = clean(body.name);
  const organization = clean(body.organization);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const weAre = clean(body.weAre);
  const collaboration = clean(body.collaboration);
  const message = clean(body.message);

  if (!name || !organization || !email || !phone || !weAre || !collaboration || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^\d+$/.test(phone)) {
    return NextResponse.json(
      { error: "Phone number must contain digits only." },
      { status: 400 },
    );
  }

  const subject = `New contact form submission from ${name}`;
  const text = [
    `Name: ${name}`,
    `Organization: ${organization || "N/A"}`,
    `Email: ${email}`,
    `Phone: ${phone || "N/A"}`,
    `We are a: ${weAre || "N/A"}`,
    `Type of collaboration: ${collaboration || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || "N/A")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
    <p><strong>We are a:</strong> ${escapeHtml(weAre || "N/A")}</p>
    <p><strong>Type of collaboration:</strong> ${escapeHtml(collaboration || "N/A")}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sarabloh Website <onboarding@resend.dev>",
      to: ["info@sarabloh.ca"],
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    return NextResponse.json(
      { error: details || "Failed to send email." },
      { status: response.status },
    );
  }

  return NextResponse.json({ ok: true });
}
