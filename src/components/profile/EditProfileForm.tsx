"use client";

import { useState } from "react";

export default function EditProfileForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary until we connect Supabase.
    console.log("Profile update:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Profile Photo */}
      <section className="rounded-4xl border border-(--border) bg-white p-8 md:p-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Profile
          </p>

          <h2 className="mt-3 font-(--font-playfair) text-3xl">
            Profile Photo
          </h2>

          <p className="mt-2 text-sm leading-7 text-(--muted)">
            Add a photo that represents you in the TSE community.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-(--surface) text-2xl text-(--muted)">
            M
          </div>

          <div>
            <button
              type="button"
              className="rounded-full border border-(--border) px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-(--surface)"
            >
              Change Photo
            </button>

            <p className="mt-3 text-xs text-(--muted)">
              JPG, PNG or WEBP. Maximum 5MB.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="rounded-4xl border border-(--border) bg-white p-8 md:p-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            About You
          </p>

          <h2 className="mt-3 font-(--font-playfair) text-3xl">
            Personal Information
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm"
            >
              First Name
            </label>

            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm"
            >
              Last Name
            </label>

            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm"
            >
              Username
            </label>

            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="@yourusername"
              className="w-full rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+254..."
              className="w-full rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 block text-sm"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="bio"
              className="mb-2 block text-sm"
            >
              Bio
            </label>

            <textarea
              id="bio"
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell the TSE community a little about yourself..."
              rows={5}
              maxLength={160}
              className="w-full resize-none rounded-2xl border border-(--border) bg-(--background) px-5 py-4 text-sm outline-none transition focus:border-(--primary)"
            />

            <p className="mt-2 text-xs text-(--muted)">
              Keep it short — maximum 160 characters.
            </p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="rounded-full border border-(--border) px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-(--surface)"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-full bg-(--primary) px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:opacity-90"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
