import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type SendResult = { ok: true } | { ok: false; error: string };

interface SendParams {
  name: string;
  email: string;
  subject: string;
  textBody: string;
  htmlBody: string;
}

// --- Resend configuration ---
// Required: RESEND_API_KEY (kept server-side). Optional: RESEND_FROM (use verified domain when ready)
const resendApiKey = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || "gaderbh2@gmail.com";
const RESEND_FROM = process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>"; // replace after domain verification

const resend = resendApiKey ? new Resend(resendApiKey) : null;

async function sendWithResend(params: SendParams): Promise<SendResult> {
  if (!resend) return { ok: false, error: "RESEND_API_KEY not configured" };
  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [CONTACT_TO],
      replyTo: params.email,
      subject: `[Portfolio] ${params.subject}`,
      text: params.textBody,
      html: params.htmlBody
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Resend send failed";
    return { ok: false, error: message };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<{
      name: string;
      email: string;
      subject: string;
      message: string;
    }>;
    const { name, email, subject, message } = body || {};

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 422 }
      );
    }

    console.log("CONTACT_FORM_SUBMISSION", { name, email, subject, len: message?.length });

    // Build plain text + HTML versions
    const sanitizedMessage = String(message).replace(/</g, "&lt;");
    const textBody = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`;
    const htmlBody = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
  <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${sanitizedMessage}</p>
  <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5"/>
  <p style="font-size:12px;color:#666">Sent from your portfolio contact form.</p>
</div>`;

    // Only use Resend (simplified as requested)
    const result = await sendWithResend({ name, email, subject, textBody, htmlBody });

    if (!result.ok) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send email." },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true, message: "Your message has been sent!" });
  } catch (err: unknown) {
    console.error("/api/contact error", err);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
