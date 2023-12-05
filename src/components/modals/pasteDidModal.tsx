import React from "react";
import ModalWrapper from "./modalWrapper/modalWrapper";
import Image from "next/image";
import Link from "next/link";
import Input from "../input/input";

export default function PasteDidModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-full h-56 px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-[7.25rem] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-between items-center inline-flex border-b border-[#272849]">
            <div className="text-white text-sm font-medium capitalize leading-tight">
              Paste DID Manually
            </div>
            <div className="w-6 h-6 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/close.svg"}
                height={24}
                width={24}
                onClick={close}
              />
            </div>
          </div>
          <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-white text-sm font-normal leading-tight">
              DID
            </div>
            <Input type="text" placeHolder="input DID" className="h-9" />
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div
            className="grow shrink basis-0 px-6 py-2 rounded-full border border-violet-300 flex-col justify-center items-center gap-2.5 inline-flex"
            onClick={close}
          >
            <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight cursor-pointer">
              Cancel
            </div>
          </div>
          <Link
            href={"/customer/hotel/room/3ddd/extend-access/form"}
            className="grow shrink basis-0 px-6 py-2 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
          >
            <div className="text-center text-white text-sm font-medium capitalize leading-tight">
              Next
            </div>
          </Link>
        </div>
      </div>
    </ModalWrapper>
  );
}
