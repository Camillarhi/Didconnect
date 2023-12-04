"use client";
import { useDisclosure, useListenForOutsideClicks } from "@/hooks";
import { ReactNode } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

export default function HotelLayout({ children }: { children: ReactNode }) {
  const { isOpen, toggle, close } = useDisclosure();
  const { elementRef } = useListenForOutsideClicks(close);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden text-black">
      <Sidebar isOpen={isOpen} sidebarRef={elementRef} />

      <div className="flex-1">
        <NavBar toggle={toggle} />
        <div className="bg-[#151628] text-white px-[1.875rem] pt-6 pb-8 h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] max-w-full overflow-y-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
