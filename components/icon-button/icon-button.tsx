import clsx from "clsx";
import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const IconButton = ({
  children,
  htmlType = "button",
  className,
  disabled = false,
  loading = false,
  onClick,
}: IconButtonProps) => (
  <button
    type={htmlType}
    disabled={disabled || loading}
    className={clsx(
      "inline-block active:transform active:translate-y-0.5 disabled:cursor-not-allowed",
      className
    )}
    onClick={(e) => {
      if (onClick) {
        onClick(e);
      }
    }}
  >
    {children}
  </button>
);

export default IconButton;
