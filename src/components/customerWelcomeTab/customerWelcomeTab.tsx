import Image from "next/image";
import React from "react";

export default function CustomerWelcomeTab({
  isCheckedIn,
  hotelName,
}: {
  isCheckedIn: boolean;
  hotelName: string;
}) {
  return (
    <div className=" h-[3.75rem] flex items-center w-full justify-between">
      <div className=" w-[18.9375rem] text-[1.75rem] font-semibold leading-8">
        Hello Rita,
        {!isCheckedIn && (
          <p className=" text-sm leading-5 font-normal text-[#DBDCDE]">
            How are you doing today?
          </p>
        )}
        {isCheckedIn && (
          <div className="w-full">
            <span className="text-zinc-300 text-sm font-normal leading-tight">
              How are you enjoying your stay at
              <br />
            </span>
            <span className="text-white text-sm font-medium capitalize leading-tight">
              {hotelName}?
            </span>
          </div>
        )}
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
