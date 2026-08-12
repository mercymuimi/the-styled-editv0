import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 active:translate-y-0";

  const variantStyles =
    variant === "primary"
      ? "bg-(--primary) text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
      : "border border-(--border) bg-(--surface) text-(--foreground) hover:-translate-y-0.5 hover:border-(--foreground)/30 hover:bg-(--background)";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </a>
  );
}