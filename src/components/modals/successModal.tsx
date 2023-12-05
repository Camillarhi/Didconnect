import React from "react";
import ModalWrapper from "./modalWrapper/modalWrapper";
import Image from "next/image";

export default function SuccessModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[21.4375rem] h-[17rem] px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-[10.25rem] flex-col justify-start items-center gap-4 flex">
          <div className="w-[4.5rem] h-[4.5rem] justify-center items-center inline-flex">
            <Image
              alt=""
              src={"/assets/svgs/success.svg"}
              height={72}
              width={72}
            />
          </div>
          <div className="text-white text-sm font-medium capitalize leading-tight">
            Access revoked
          </div>
          <div className="self-stretch h-10 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-10 flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-center">
                <span className="text-zinc-300 text-sm font-normal leading-tight">
                  You granted access to
                </span>
                <span className="text-white text-sm font-medium capitalize leading-tight">
                  Ramona Siwes
                </span>
                <span className="text-zinc-300 text-sm font-normal leading-tight">
                  to clean your room for
                </span>
                <span className="text-white text-sm font-medium capitalize leading-tight">
                  2 hours
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-9 px-6 py-2 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
          onClick={close}
        >
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Done
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
