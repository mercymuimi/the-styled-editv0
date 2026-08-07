import Link from "next/link";

import EditProfileForm from "@/components/profile/EditProfileForm";

export default function EditProfilePage() {
  return (
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/profile"
            className="text-xs uppercase tracking-[0.2em] text-(--muted) transition hover:text-(--foreground)"
          >
            ← Back to Profile
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.35em] text-(--primary)">
            Account
          </p>

          <h1 className="mt-3 font-(--font-playfair) text-4xl md:text-5xl">
            Edit Profile
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted)">
            Keep your TSE profile up to date and let the community know a
            little more about you.
          </p>
        </div>

        <EditProfileForm />
      </div>
    </main>
  );
}