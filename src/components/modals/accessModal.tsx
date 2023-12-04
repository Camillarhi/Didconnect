import Image from "next/image";
import React from "react";
import ModalWrapper from "./modalWrapper/modalWrapper";

export default function AccessModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[343px] h-[428px] px-4 pt-4 pb-6 bg-[#191A2F] rounded-lg flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-80 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch pb-4 shadow-inner justify-between items-center inline-flex border-b border-[#272849]">
            <div className="text-white text-sm font-medium capitalize leading-tight">
              Permissions
            </div>
            <Image
              alt=""
              src={"/assets/svgs/close.svg"}
              height={24}
              width={24}
              className=" rounded-md"
            />
          </div>
          <div className="self-stretch h-[264px] flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch h-10 flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                Name
              </div>
              <div className="self-stretch text-white text-sm font-medium capitalize leading-tight">
                Ramona Siwes{" "}
              </div>
            </div>
            <div className="self-stretch h-10 flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                Purpose of request
              </div>
              <div className="self-stretch text-white text-sm font-medium capitalize leading-tight">
                Cleaning
              </div>
            </div>
            <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                From
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  12:00
                </div>
                <div className="w-[5px] h-[5px] bg-gray-500 rounded-full" />
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  25 Dec, 2023
                </div>
              </div>
            </div>
            <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                To
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  14:00
                </div>
                <div className="w-[5px] h-[5px] bg-gray-500 rounded-full" />
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  25 Dec, 2023
                </div>
              </div>
            </div>
            <div className="self-stretch justify-center items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
                <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                  Duration
                </div>
                <div className="self-stretch text-white text-sm font-medium capitalize leading-tight">
                  2 hours
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="grow shrink basis-0 px-6 py-2 rounded-[100px] border border-violet-300 flex-col justify-center items-center gap-2.5 inline-flex">
            <div
              className="text-center text-violet-300 text-sm font-medium capitalize leading-tight"
              onClick={close}
            >
              Close
            </div>
          </div>
          <div className="grow shrink basis-0 px-6 py-2 bg-red-700 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-medium capitalize leading-tight">
              Revoke access
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
