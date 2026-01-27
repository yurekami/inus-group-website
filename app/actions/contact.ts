"use server";

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

  // Simulate sending email (replace with actual email service)
  // In production, integrate with services like Resend, SendGrid, or Nodemailer
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log for development (remove in production)
    console.log("Contact form submission:", rawData);

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch {
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
