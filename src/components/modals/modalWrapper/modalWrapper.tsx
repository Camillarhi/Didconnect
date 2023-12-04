import React, { ReactNode } from "react";

export default function ModalWrapper({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  return (
    <div
      className={` ${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-sm items-center justify-center z-40`}
    >
      {children}
    </div>
  );
}
