"use client";
import { ReactNode } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";
import { useDisclosure, useListenForOutsideClicks } from "@/hooks";

export default function Layout({ children }: { children: ReactNode }) {
  const { open, isOpen, toggle, close } = useDisclosure();
  const { elementRef } = useListenForOutsideClicks(close);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden text-black">
      <Sidebar isOpen={isOpen} sidebarRef={elementRef} />

      <div className="flex-1">
        <NavBar open={toggle} />
        <div className="bg-[#151628] text-white">{children}</div>
      </div>
    </div>
  );
}
