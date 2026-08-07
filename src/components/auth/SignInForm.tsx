"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Authentication will be connected to Supabase later.
    console.log({
      email,
      password,
    });
  }

  return (
    <div>

      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
          Welcome Back
        </p>

        <h1 className="mt-4 font-(--font-playfair) text-4xl sm:text-5xl">
          Sign in
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-(--muted)">
          Welcome back to The Styled Edit. Sign in to
          continue your style journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Email */}
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

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-xs uppercase tracking-[0.18em]"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-xs text-(--muted) transition hover:text-(--foreground)"
            >
              Forgot password?
            </Link>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
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

        {/* Submit */}
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
          Sign In
        </button>

      </form>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-(--border)" />

        <span className="text-xs uppercase tracking-[0.2em] text-(--muted)">
          TSE
        </span>

        <div className="h-px flex-1 bg-(--border)" />
      </div>

      <p className="text-center text-xs leading-5 text-(--muted)">
        By signing in, you agree to our Terms and
        Privacy Policy.
      </p>

    </div>
  );
}
