"use client";

import { useActionState } from "react";
import { submitContact, ContactFormState } from "../actions/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.success) {
    return (
      <div className="contact-success">
        <span className="success-icon">✓</span>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          className="form-input"
          placeholder="Your name"
          disabled={isPending}
        />
        {state.errors?.name && (
          <span className="form-error">{state.errors.name[0]}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          className="form-input"
          placeholder="you@example.com"
          disabled={isPending}
        />
        {state.errors?.email && (
          <span className="form-error">{state.errors.email[0]}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          className="form-input form-textarea"
          placeholder="How can we help you?"
          disabled={isPending}
        />
        {state.errors?.message && (
          <span className="form-error">{state.errors.message[0]}</span>
        )}
      </div>

      {state.message && !state.success && (
        <div className="form-message form-message-error">{state.message}</div>
      )}

      <button type="submit" className="form-submit" disabled={isPending}>
        {isPending ? (
          <>
            <span className="spinner" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
