import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--primary)] text-white hover:-translate-y-1 hover:shadow-xl"
      : "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--surface)]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}