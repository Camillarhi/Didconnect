import React from "react";
import Input, { InputProps } from "./input";

export type InputGroupProps = InputProps & {
  label: string;
};

export default function InputGroup({
  placeHolder,
  type,
  className,
  disabled = false,
  label,
}: InputGroupProps) {
  return (
    <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
      <div className="self-stretch text-white text-sm font-normal leading-tight">
        {label}
      </div>
      <Input
        type={type}
        className={className}
        placeHolder={placeHolder}
        disabled={disabled}
      />
    </div>
  );
}
