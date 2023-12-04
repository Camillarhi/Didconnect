import React from "react";

export default function BookingDetails() {
  return (
    <div className=" flex flex-col gap-y-6 w-[21.4375rem] ">
      <div className="h-24 flex-col justify-start items-start gap-4 inline-flex border-b border-[#272849]">
        <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
          Schedule
        </div>
        <div className="self-stretch h-16 pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-300 text-xs font-normal leading-none">
              Check-in
            </div>
            <div className="text-white text-sm font-medium capitalize leading-tight">
              24 dec, 2023
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-300 text-xs font-normal leading-none">
              Check-out
            </div>
            <div className="text-white text-sm font-medium capitalize leading-tight">
              26 dec, 2023
            </div>
          </div>
        </div>
      </div>
      <div className="w-[343px] h-[124px] flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
          Pricing
        </div>
        <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-300 text-xs font-normal leading-none">
              Price
            </div>
            <div>
              <span className="text-white text-sm font-medium capitalize leading-tight">
                $400
              </span>
              <span className="text-gray-500 text-xs font-normal leading-none">
                /night
              </span>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-300 text-xs font-normal leading-none">
              Duration
            </div>
            <div className="text-white text-sm font-medium capitalize leading-tight">
              8 days
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-zinc-300 text-xs font-normal leading-none">
            Total
          </div>
          <div className="text-white text-xl font-semibold leading-7">
            $2,400
          </div>
        </div>
      </div>
    </div>
  );
}
