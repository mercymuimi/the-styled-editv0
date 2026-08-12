"use client";

import { useEffect, useState } from "react";
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
  { label: "Our Story", href: "/about" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.jpg"
        alt="The Styled Edit"
        width={42}
        height={42}
        priority
        className="rounded-full object-cover"
      />

      <span className="font-(--font-playfair) text-[1.65rem] italic leading-none tracking-tight">
        TSE
      </span>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /*
   * Close mobile navigation whenever
   * the route changes.
   */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /*
   * Prevent the page from scrolling behind
   * the open mobile navigation.
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Determines whether a navigation item
   * represents the current route.
   *
   * This means:
   *
   * /edit
   * /edit/the-creative-edit
   *
   * can both activate "Edit".
   */
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-[rgba(248,246,242,0.88)] backdrop-blur-xl">
      <Container>
        <nav
          className="flex h-20 items-center justify-between lg:h-22"
          aria-label="Main navigation"
        >
          {/* LOGO */}

          <Link
            href="/"
            aria-label="The Styled Edit — Home"
            className="shrink-0"
          >
            <Logo />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-2 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300"
                  style={{
                    color: active
                      ? "var(--foreground)"
                      : "var(--muted)",
                  }}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px bg-(--primary) transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center lg:flex">
            <Link
              href="/community"
              className="bg-(--primary) px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-(--primary-dark)"
            >
              Join Community
            </Link>

            <div className="ml-8 flex items-center gap-5">
              <Link
                href="/search"
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center text-(--foreground) transition-colors duration-300 hover:text-(--primary)"
              >
                <Search
                  size={17}
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="/profile"
                aria-label="Profile"
                className="flex h-9 w-9 items-center justify-center text-(--foreground) transition-colors duration-300 hover:text-(--primary)"
              >
                <User
                  size={17}
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="/cart"
                aria-label="Shopping Bag"
                className="flex h-9 w-9 items-center justify-center text-(--foreground) transition-colors duration-300 hover:text-(--primary)"
              >
                <ShoppingBag
                  size={17}
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center text-(--foreground) transition-colors duration-300 hover:text-(--primary) lg:hidden"
          >
            {open ? (
              <X
                size={22}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.5}
              />
            )}
          </button>
        </nav>
      </Container>

      {/* MOBILE NAVIGATION */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-(--border) bg-(--background) transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
          <Container>
            <div className="flex flex-col py-7">

              {/* NAV LINKS */}

              <div className="flex flex-col">
                {links.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={
                        active ? "page" : undefined
                      }
                      className="flex items-center justify-between border-b border-(--border) py-4 text-sm uppercase tracking-[0.18em]"
                      style={{
                        color: active
                          ? "var(--foreground)"
                          : "var(--muted)",
                      }}
                    >
                      <span>{link.label}</span>

                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-(--primary)"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* COMMUNITY CTA */}

              <Link
                href="/community"
                className="mt-7 bg-(--primary) px-5 py-4 text-center text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-(--primary-dark)"
              >
                Join Community
              </Link>

              {/* UTILITY LINKS */}

              <div className="mt-7 grid grid-cols-3 border-t border-(--border) pt-6">
                <Link
                  href="/search"
                  className="flex flex-col items-center gap-2 border-r border-(--border) text-[10px] uppercase tracking-[0.12em] text-(--muted) transition-colors hover:text-(--primary)"
                >
                  <Search
                    size={17}
                    strokeWidth={1.5}
                  />
                  Search
                </Link>

                <Link
                  href="/profile"
                  className="flex flex-col items-center gap-2 border-r border-(--border) text-[10px] uppercase tracking-[0.12em] text-(--muted) transition-colors hover:text-(--primary)"
                >
                  <User
                    size={17}
                    strokeWidth={1.5}
                  />
                  Profile
                </Link>

                <Link
                  href="/cart"
                  className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-(--muted) transition-colors hover:text-(--primary)"
                >
                  <ShoppingBag
                    size={17}
                    strokeWidth={1.5}
                  />
                  Bag
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}