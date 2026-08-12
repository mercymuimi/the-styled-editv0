import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-360
        px-5
        sm:px-6
        md:px-10
        lg:px-12
        xl:px-16
        2xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}