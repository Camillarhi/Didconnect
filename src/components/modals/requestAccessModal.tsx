"use client";
import { useDisclosure } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import Input from "../input/input";
import InputGroup from "../input/inputGroup";
import ModalWrapper from "./modalWrapper/modalWrapper";
import SuccessModal from "./successModal";

export default function RequestAccessModal({
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
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[32.375rem] h-[28.75rem] px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-start inline-flex">
        <div className="self-stretch pb-4 shadow-inner justify-between items-center inline-flex border-b border-[#272849]">
          <div className="text-white text-sm font-medium capitalize leading-tight">
            Request Access to room
          </div>
          <Image
            alt=""
            src={"/assets/svgs/close.svg"}
            height={24}
            width={24}
            className=" rounded-md cursor-pointer"
            onClick={close}
          />
        </div>
        <div className=" w-full mt-6">
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            <InputGroup
              label="DID"
              type="text"
              className="h-9 "
              placeHolder="Jordan@Peters.com"
              props={{}}
            />
            <InputGroup
              label="Name"
              type="text"
              className="h-9 "
              placeHolder="Jordan Peters"
              props={{}}
            />

            <InputGroup
              label="Purpose of request"
              type="text"
              className="h-9 "
              placeHolder="Jordan Peters"
              props={{}}
            />

            <div className=" flex w-full justify-between gap-4">
              <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                <div className="text-white text-sm font-normal leading-tight">
                  From
                </div>

                <Input type="date" className="h-9 " placeHolder="Guest" />
              </div>
              <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                <div className="text-white text-sm font-normal leading-tight">
                  To
                </div>
                <Input type="date" className="h-9 " />
              </div>
            </div>
          </div>

          <div className="w-full h-10 justify-end items-start gap-4 inline-flex mt-5">
            <div
              className=" px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              onClick={close}
            >
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Cancel
              </div>
            </div>
            <div
              className=" px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
              onClick={() => openSuccesModal()}
            >
              <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={isSuccesModalOpen}
        close={() => {
          close();
          closeSuccesModal();
        }}
      />
    </ModalWrapper>
  );
}
