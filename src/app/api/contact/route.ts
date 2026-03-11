import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // port 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // allow self-signed certs on hosted servers
      },
    });

    // Email to Softwave (notification)
    await transporter.sendMail({
      from: `"Softwave Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
          <div style="background: #e8735f; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Project Inquiry</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">via softwaveinnovation.com</p>
          </div>

          <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #e8735f; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #e8735f;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 14px;">${company}</td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 14px;">${service}</td>
              </tr>` : ""}
            </table>
          </div>

          <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin: 0;">
            Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Softwave Innovation" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message — Softwave Innovation`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
          <div style="background: #e8735f; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thanks for reaching out!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Softwave Innovation</p>
          </div>

          <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <p style="color: #1a1a1a; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Hi ${name},
            </p>
            <p style="color: #4b5563; font-size: 14px; line-height: 1.7; margin: 0 0 16px;">
              We've received your message and will get back to you within <strong>24 hours</strong>.
            </p>
            <p style="color: #4b5563; font-size: 14px; line-height: 1.7; margin: 0;">
              In the meantime, feel free to explore our services at
              <a href="https://softwaveinnovation.com/services" style="color: #e8735f;">softwaveinnovation.com</a>.
            </p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin: 0;">
            © ${new Date().getFullYear()} Softwave Innovation. All rights reserved.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Email error:", message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
