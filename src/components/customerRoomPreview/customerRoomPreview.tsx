import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CustomerRoomPreview() {
  return (
    <div className=" mt-6 h-fit w-full bg-[#191A2F] border border-[#272849] rounded-md px-4 py-3 flex flex-col gap-4">
      {/* room number */}
      <div className=" h-10 flex justify-between">
        <div>
          <div className=" text-sm font-medium capitalize flex items-center gap-x-1">
            <span>Room 101</span>
            <div className=" w-[.3125rem] h-[.3125rem] rounded-full bg-[#67687E]"></div>
            <span>Maestro</span>
          </div>

          <div className="text-zinc-300 text-xs font-normal leading-none mt-1">
            Four seasons
          </div>
        </div>
        <div>
          <span className="text-white text-base font-semibold leading-normal">
            $1,200
          </span>
          <span className="text-zinc-300 text-xs font-normal leading-none">
            /night
          </span>
        </div>
      </div>

      <Link href={"/customer/home/hotel/room/798"}>
        <Image
          alt=""
          src={"/assets/images/hotel.png"}
          height={230.363}
          width={345.545}
          className=" rounded-md"
        />
      </Link>

      {/* checkin */}
      <div className="w-full h-[2.375rem] justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
            Check-in
          </div>
          <div className="text-white text-sm font-medium capitalize leading-tight">
            25 Dec, 2023
          </div>
        </div>
        <div className="w-[6.125rem] flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
            Check-out
          </div>
          <div className="text-white text-sm font-medium capitalize leading-tight">
            25 Dec, 2023
          </div>
        </div>
      </div>
    </div>
  );
}
