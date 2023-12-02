import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};
export default function Button({
  children,
  type = "button",
  onClick,
  className,
  disabled,
}: Readonly<Props>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} text-white bg-primary h-10 rounded-full font-poppins capitalize`}
    >
      {children}
    </button>
  );
}