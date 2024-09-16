import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  size?: "default";
  color?: "default" | "primary";
  disabled?: boolean;
  onClick?: () => void;
}

const sizes = {
  default: "font-medium",
};

const colors = {
  default: "text-white bg-background",
  primary: "text-black bg-white border-white",
};

export const Button = ({
  children,
  htmlType = "button",
  size = "default",
  color = "default",
  disabled = false,
  onClick,
}: ButtonProps) => (
  <button
    type={htmlType}
    className={clsx(
      "inline block border border-border px-3 py-1 rounded-full active:transform active:translate-y-0.5 disabled:cursor-not-allowed",
      sizes[size],
      colors[color]
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
