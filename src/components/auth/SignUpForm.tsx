"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Authentication will be connected to Supabase later.
    console.log({
      name,
      email,
      password,
    });
  }

  return (
    <div>

      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
          Join TSE
        </p>

        <h1 className="mt-4 font-(--font-playfair) text-4xl sm:text-5xl">
          Create account
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-(--muted)">
          Create your TSE account and become part of
          a community built around fashion, style and
          self-expression.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs uppercase tracking-[0.18em]"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
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
          <label
            htmlFor="password"
            className="mb-2 block text-xs uppercase tracking-[0.18em]"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 8 characters"
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
          Create Account
        </button>

      </form>

      <div className="mt-8 text-center">
        <p className="text-xs leading-5 text-(--muted)">
          By creating an account, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>

    </div>
  );
}
