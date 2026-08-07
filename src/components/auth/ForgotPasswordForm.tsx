"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Supabase password reset will be connected here later.
    setSubmitted(true);
  }

  return (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
          Account Recovery
        </p>

        <h1 className="mt-4 font-(--font-playfair) text-4xl sm:text-5xl">
          Forgot password?
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-(--muted)">
          No worries. Enter the email address connected to
          your TSE account and we'll help you get back in.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
          <p className="text-sm leading-6">
            If an account exists with that email address,
            you'll receive a password reset link shortly.
          </p>

          <Link
            href="/signin"
            className="
              mt-6
              inline-flex
              rounded-full
              bg-(--primary)
              px-6
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-white
              transition
              hover:opacity-90
            "
          >
            Back to Sign In
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-[0.18em]"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border
                border-(--border)
                bg-white
                px-4
                py-4
                text-sm
                outline-none
                transition
                placeholder:text-(--muted)
                focus:border-(--primary)
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-full
              bg-(--primary)
              px-6
              py-4
              text-xs
              uppercase
              tracking-[0.25em]
              text-white
              transition
              hover:opacity-90
            "
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <Link
              href="/signin"
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-(--muted)
                underline
                underline-offset-4
                transition
                hover:text-(--foreground)
              "
            >
              Back to Sign In
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
