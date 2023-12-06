import React, { forwardRef, useImperativeHandle } from "react";

export type InputProps = {
  placeHolder?: string;
  type: string;
  disabled?: boolean;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeHolder, type, className, disabled = false, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <input
        ref={inputRef}
        className={`w-full focus:outline-none block bg-transparent rounded-[.25rem] self-stretch border border-slate-600 py-2 px-3 text-white text-sm font-normal leading-tight ${className}`}
        placeholder={placeHolder ?? ""}
        type={type}
        onWheel={(e) => e.currentTarget.blur()}
        disabled={disabled}
        {...props}
        max={1}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
