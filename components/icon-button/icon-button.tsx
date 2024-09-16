import clsx from "clsx";

interface IconButtonProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const IconButton = ({
  children,
  htmlType = "button",
  className,
  disabled = false,
  loading = false,
}: IconButtonProps) => (
  <button
    type={htmlType}
    disabled={disabled || loading}
    className={clsx(
      "inline-block active:transform active:translate-y-0.5 disabled:cursor-not-allowed",
      className
    )}
  >
    {children}
  </button>
);

export default IconButton;
