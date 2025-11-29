import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: boolean;
  hover?: boolean;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  padding = "md",
  shadow = true,
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl
        ${paddingClasses[padding]}
        ${shadow ? "shadow-lg" : ""}
        ${hover ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
