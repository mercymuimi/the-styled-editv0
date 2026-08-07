"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import Container from "./Container";

const links = [
  { label: "Home", href: "/" },
  { label: "Edit", href: "/edit" },
  { label: "Styling", href: "/styling" },
  { label: "Journal", href: "/journal" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Our Story", href: "/Our Story" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.jpg"
        alt="The Styled Edit"
        width={48}
        height={48}
        priority
        className="rounded-full object-cover"
      />

      <span className="font-(--font-playfair) text-2xl italic tracking-tight">
        TSE
      </span>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-[rgba(247,242,236,0.85)] backdrop-blur-xl"
    >
      <Container>
        <nav className="flex h-22 items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-[13px] uppercase tracking-[0.18em] transition-colors duration-300"
                  style={{
                    color: active
                      ? "var(--foreground)"
                      : "var(--muted)",
                  }}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-(--primary) transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Utilities */}

          <div className="hidden items-center lg:flex">

            <Link
              href="/community"
              className="rounded-full bg-(--primary) px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:opacity-90"
            >
              Join Community
            </Link>

            <div className="ml-10 flex items-center gap-5">

              <Link
                href="/search"
                aria-label="Search"
                className="transition duration-300 hover:text-(--primary)"
              >
                <Search size={18} />
              </Link>

              <Link
                href="/profile"
                aria-label="Profile"
                className="transition duration-300 hover:text-(--primary)"
              >
                <User size={18} />
              </Link>

              <Link
                href="/cart"
                aria-label="Shopping Bag"
                className="relative transition duration-300 hover:text-(--primary)"
              >
                <ShoppingBag size={18} />

                {/*
                Later when cart is connected

                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-(--primary)
                    text-[10px]
                    text-white
                  "
                >
                  2
                </span>
                */}
              </Link>

            </div>

          </div>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden"
            aria-label={
              open
                ? "Close Menu"
                : "Open Menu"
            }
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-(--border) bg-(--background) transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open
            ? "max-h-175"
            : "max-h-0"
        }`}
      >
        <Container>

          <div className="flex flex-col gap-6 py-8">

            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em]"
                  style={{
                    color: active
                      ? "var(--foreground)"
                      : "var(--muted)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/community"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-(--primary) px-5 py-4 text-center text-sm uppercase tracking-[0.2em] text-white"
            >
              Join Community
            </Link>

            <div
              className="mt-4 flex items-center gap-8 border-t border-(--border) pt-6"
            >

              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm transition hover:text-(--primary)"
              >
                <Search size={16} />
                Search
              </Link>

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm transition hover:text-(--primary)"
              >
                <User size={16} />
                Profile
              </Link>

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm transition hover:text-(--primary)"
              >
                <ShoppingBag size={16} />
                Cart
              </Link>

            </div>

          </div>

        </Container>
      </div>
    </header>
  );
}