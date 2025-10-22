"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormResult = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.length < 2) {
      return {
        success: false,
        error: "Please provide a valid name (min. 2 characters)",
      };
    }

    if (!email || !email.includes("@")) {
      return {
        success: false,
        error: "Please provide a valid email address",
      };
    }

    if (!subject || subject.length < 5) {
      return {
        success: false,
        error: "Please provide a subject (min. 5 characters)",
      };
    }

    if (!message || message.length < 10) {
      return {
        success: false,
        error: "Please provide a message (min. 10 characters)",
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "⚠️ RESEND_API_KEY not configured. Email will be logged to console only."
      );
      console.log("📧 Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      return {
        success: true,
        message:
          "Thanks for reaching out! (Demo mode - configure Resend to send emails)",
      };
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Change this after domain verification
      to: "erackson05@gmail.com", // Your verified email for testing
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Sent from your portfolio contact form on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    console.log("✅ Email sent successfully:", data);

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
