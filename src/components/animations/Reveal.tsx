"use client";

import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({
  children,
}: RevealProps) {
  return <>{children}</>;
}