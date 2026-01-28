"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

async function getRateLimitKey(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  return forwarded?.split(",")[0]?.trim() || realIp || "anonymous";
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

async function withTimeout<T>(
  promise: Promise<T>,
  ms: number
): Promise<T> {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("Request timeout")), ms);
  });
  return Promise.race([promise, timeout]);
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Rate limiting
  const clientIp = await getRateLimitKey();
  const { allowed } = checkRateLimit(clientIp);

  if (!allowed) {
    return {
      success: false,
      message: "Too many requests. Please try again later.",
    };
  }

  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // Validation with max lengths
  const errors: ContactFormState["errors"] = {};

  if (!rawData.name || rawData.name.trim().length < 2 || rawData.name.length > 100) {
    errors.name = ["Name must be between 2 and 100 characters"];
  }

  if (!rawData.email || !isValidEmail(rawData.email) || rawData.email.length > 254) {
    errors.email = ["Please enter a valid email address"];
  }

  if (!rawData.message || rawData.message.trim().length < 10 || rawData.message.length > 5000) {
    errors.message = ["Message must be between 10 and 5000 characters"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    };
  }

  try {
    await withTimeout(
      resend.emails.send({
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
      }),
      10000
    );

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email send error:", error);
    const isTimeout = error instanceof Error && error.message === "Request timeout";
    return {
      success: false,
      message: isTimeout
        ? "Request timed out. Please try again."
        : "Something went wrong. Please try again later.",
    };
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
