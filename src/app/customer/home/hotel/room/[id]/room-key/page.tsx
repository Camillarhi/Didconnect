import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import Image from "next/image";
import React from "react";

export default function DigitalRoomKey() {
  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack text={"Unlock your door"} backgroundColor="bg-[#151628]" />
      <div className=" h-full w-full mt-6">
        <div className="w-full text-center text-[#DBDCDE] text-sm font-normal leading-tight">
          Use the QR code below to open your door
        </div>

        <div className="self-stretch h-[24.75rem] flex-col justify-start items-center gap-6 flex">
          <div className="w-[12.4375rem] h-[12.4375rem] relative">
            <Image alt="" src={""} height={199} width={199} />
          </div>
          <div className="self-stretch text-center text-[#DBDCDE] text-sm font-normal leading-tight">
            Guard your unique room key with care. It's your exclusive access –
            keep it safe!
          </div>
        </div>
      </div>
    </div>
  );
}
