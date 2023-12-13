import React from "react";
import ModalWrapper from "./modalWrapper/modalWrapper";
import Image from "next/image";

export default function AlertModal({
  isOpen,
  close,
  title,
  description,
}: {
  isOpen: boolean;
  close: () => void;
  title: string;
  description: string;
}) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[21.4375rem] h-[18.25rem] px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-[11.5rem] flex-col justify-start items-center gap-4 flex">
          <div className="w-[4.5rem] h-[4.5rem] justify-center items-center inline-flex">
            <Image
              alt=""
              src={"/assets/svgs/warning.svg"}
              height={72}
              width={72}
            />
          </div>
          <div className="text-white text-sm font-medium capitalize leading-tight">
            {title}
          </div>
          <div className="self-stretch h-[3.75rem] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-center text-zinc-300 text-sm font-normal leading-tight">
                {description}
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-9 px-6 py-2 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
          onClick={close}
        >
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Okay
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
