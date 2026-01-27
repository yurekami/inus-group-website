"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // Validation
  const errors: ContactFormState["errors"] = {};

  if (!rawData.name || rawData.name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters"];
  }

  if (!rawData.email || !isValidEmail(rawData.email)) {
    errors.email = ["Please enter a valid email address"];
  }

  if (!rawData.message || rawData.message.trim().length < 10) {
    errors.message = ["Message must be at least 10 characters"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    };
  }

  try {
    await resend.emails.send({
      from: "INUS Group Website <noreply@inus-group.com>",
      to: "admin@inus-group.com",
      replyTo: rawData.email,
      subject: `Contact Form: Message from ${rawData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${rawData.name}</p>
        <p><strong>Email:</strong> ${rawData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${rawData.message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
New Contact Form Submission

Name: ${rawData.name}
Email: ${rawData.email}
Message:
${rawData.message}
      `,
    });

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
