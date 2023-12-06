import Image from "next/image";
import React from "react";

export default function CustomerWelcomeTab({
  hotelName,
  text,
}: {
  hotelName?: string;
  text?: string;
}) {
  return (
    <div className=" h-[3.75rem] flex items-center w-full justify-between">
      <div className=" w-[18.9375rem] text-[1.75rem] font-semibold leading-8">
        Hello Rita,
        <div className="w-full">
          <span className="text-[#DBDCDE] text-sm font-normal leading-tight">
            {text} <br />
          </span>
          <span className="text-white text-sm font-medium capitalize leading-tight">
            {hotelName&& ` ${hotelName}?`}
          </span>
        </div>
      </div>
      <div className=" bg-[#191A2F] rounded-full h-8 w-8 flex justify-center items-center">
        <Image
          alt=""
          src={"/assets/svgs/bell-white.svg"}
          height={24}
          width={24}
        />
      </div>
    </div>
  );
}
