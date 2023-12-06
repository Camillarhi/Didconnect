"use client";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import PasteDidModal from "@/components/modals/pasteDidModal";
import { useDisclosure } from "@/hooks";
import Link from "next/link";
import React from "react";

export default function ScanHotelQrCode() {
  const { open, isOpen, close } = useDisclosure();

  return (
    <div>
      <div className=" bg-black h-[100vh] w-full">
        <MobileGoBack
          text="Scan QR Code to connect with hotel"
          backgroundColor="bg-black"
        />
        <div className="w-full h-full px-4 pt-6 pb-10 flex-col justify-start items-center gap-6 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-6 flex">
            <div className="w-full h-full relative"></div>
          </div>
          <div
            onClick={() => open()}
            className="self-stretch h-[5.1875rem] px-6 py-2.5 bg-indigo-950 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
          >
            <div className="text-center text-white text-base font-semibold leading-normal ">
              Scan QR Code
            </div>
          </div>
        </div>
      </div>
      <PasteDidModal isOpen={isOpen} close={close} />
    </div>
  );
}
