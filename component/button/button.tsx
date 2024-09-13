import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: "primary";
  size?: "default";
}

const buttonTypes = {
  primary: "text-white bg-red-500",
};

const buttonSizes = {
  default: "px-4 py-2 font-semibold text-xl",
};

const Button = ({
  children,
  htmlType = "button",
  type = "primary",
  size = "default",
}: ButtonProps) => (
  <button type={htmlType} className={clsx("block", buttonTypes[type], buttonSizes[size])}>
    {children}
  </button>
);

export default Button;
