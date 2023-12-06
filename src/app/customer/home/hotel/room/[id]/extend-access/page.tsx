"use client";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import PasteDidModal from "@/components/modals/pasteDidModal";
import { useDisclosure } from "@/hooks";
import Link from "next/link";

export default function ExtendAccess() {
  const { open, isOpen, close } = useDisclosure();

  return (
    <div>
      <div className=" bg-black h-[100vh] w-full">
        <MobileGoBack text="Scan QR Code" backgroundColor="bg-black" />
        <div className="w-full h-full px-4 pt-6 pb-10 flex-col justify-start items-center gap-6 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-6 flex">
            <div className="w-full h-full relative"></div>
          </div>
          <Link
            href={"/customer/home/hotel/room/3ddd/extend-access/form"}
            className="self-stretch h-[5.1875rem] px-6 py-2.5 bg-indigo-950 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
          >
            <div className="text-center text-white text-base font-semibold leading-normal ">
              Scan QR Code
            </div>
          </Link>
          <div
            className="self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
            onClick={() => open()}
          >
            <div className="text-center text-white text-sm font-medium capitalize leading-tight ">
              Paste DID Manually instead
            </div>
          </div>
        </div>
      </div>
      <PasteDidModal isOpen={isOpen} close={close} />
    </div>
  );
}
