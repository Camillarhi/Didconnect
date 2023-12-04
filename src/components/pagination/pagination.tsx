import Image from "next/image";
import React from "react";

export default function Pagination() {
  return (
    <div className="w-full h-[3.6875rem] px-6 py-[1.125rem] justify-end items-center gap-4 inline-flex border border-[#272849] rounded-b-md">
      <div className="justify-start items-center gap-6 flex">
        <div className="text-gray-500 text-sm font-normal leading-[1.4375rem]">
          Showing 1-6 of 15
        </div>
        <div className="justify-start items-start gap-2 flex">
          <div className="w-3.5 h-3.5 justify-center items-center flex">
            <Image
              alt=""
              src={"/assets/svgs/arrow-left.svg"}
              height={14}
              width={14}
              className=" cursor-pointer"
            />
          </div>
          <div className="w-3.5 h-3.5 justify-center items-center flex">
            <Image
              alt=""
              src={"/assets/svgs/arrow-right.svg"}
              height={14}
              width={14}
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
