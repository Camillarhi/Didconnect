import React from "react";
import ModalWrapper from "./modalWrapper/modalWrapper";
import Image from "next/image";
import Input from "../input/input";
import SuccessModal from "./successModal";
import { useDisclosure } from "@/hooks";

export default function CheckOutModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const {
    open: openSuccesModal,
    isOpen: isSuccesModalOpen,
    close: closeSuccesModal,
  } = useDisclosure();

  return (
    <>
      <ModalWrapper isOpen={isOpen}>
        <div className="w-[21.4375rem] h-80 px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch h-[13.25rem] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-between items-center inline-flex">
              <div className="text-white text-sm font-medium capitalize leading-tight">
                Check-out Earlier?
              </div>
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/close.svg"}
                  height={24}
                  width={24}
                  className=" rounded-md"
                  onClick={close}
                />
              </div>
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal leading-tight">
              You are about to check yourself out of your room. This will remove
              all access you have to this room. Please input your room number to
              proceed{" "}
            </div>
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-white text-sm font-normal leading-tight">
                Room number
              </div>
              <Input type="text" className="h-9 " placeHolder="room number" />
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-2 inline-flex">
            <div
              className="grow shrink basis-0 px-6 py-2 rounded-full border border-violet-300 flex-col justify-center items-center gap-2.5 inline-flex"
              onClick={close}
            >
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Close
              </div>
            </div>
            <div
              className="grow shrink basis-0 px-6 py-2 bg-gray-500 rounded-full flex-col justify-center items-center gap-2.5 inline-flex"
              onClick={() => openSuccesModal()}
            >
              <div className="text-center text-zinc-100 text-sm font-medium capitalize leading-tight">
                Check-out
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
      <SuccessModal
        isOpen={isSuccesModalOpen}
        close={() => {
          close();
          closeSuccesModal();
        }}
      />
    </>
  );
}
