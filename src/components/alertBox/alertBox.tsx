import React from "react";

export default function AlertBox({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="w-full h-20 p-4 shadow-inner flex-col justify-start items-start gap-2 inline-flex border border-[#272849]">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="h-5 justify-start items-center gap-2 flex">
          <div className={`w-3.5 h-3.5 relative ${status} rounded-[1.1875rem]`} />
          <div className="text-white text-sm font-medium capitalize leading-tight">
            {title}
          </div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
            14:00
          </div>
          <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
          <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
            April 10th, 2023
          </div>
        </div>
      </div>
      <div className="self-stretch text-zinc-300 text-sm font-normal leading-tight">
        Guests staying at Room 145 have checked out
      </div>
    </div>
  );
}
