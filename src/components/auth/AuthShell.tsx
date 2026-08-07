import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
  mode: "signin" | "signup";
}

export default function AuthShell({
  children,
  mode,
}: AuthShellProps) {
  const isSignIn = mode === "signin";

  return (
    <main className="min-h-screen bg-(--background)">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Brand Side */}
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/images/founder.jpg"
            alt="The Styled Edit"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt="The Styled Edit"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="font-(--font-playfair) text-2xl italic">
                TSE
              </span>
            </Link>

            <div className="max-w-md">
              <p className="mb-4 text-xs uppercase tracking-[0.35em]">
                The Styled Edit
              </p>

              <h1 className="font-(--font-playfair) text-5xl leading-tight xl:text-6xl">
                Fashion.
                <br />
                Style.
                <br />
                Community.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/80">
                A fashion and lifestyle house built around
                self-expression, personal style and community.
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              © {new Date().getFullYear()} The Styled Edit
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="flex min-h-screen flex-col">

          {/* Mobile Logo */}
          <div className="flex items-center justify-between p-6 lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt="The Styled Edit"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="font-(--font-playfair) text-xl italic">
                TSE
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-(--border) px-6 py-6 text-center">
            <p className="text-xs text-(--muted)">
              {isSignIn ? (
                <>
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-(--foreground) underline underline-offset-4"
                  >
                    Create one
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="font-medium text-(--foreground) underline underline-offset-4"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}