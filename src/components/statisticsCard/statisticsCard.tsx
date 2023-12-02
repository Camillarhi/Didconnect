import Image from "next/image";
import React from "react";

export default function StatisticsCard({
  title,
  stats,
}: {
  title: string;
  stats: string;
}) {
  return (
      <div className="grow shrink basis-0 rounded-md border border-[#272849] flex-col justify-start items-start inline-flex h-[9.5rem">
      <div className="self-stretch p-4 shadow-inner justify-start items-center gap-2 inline-flex border border-[#272849]">
        <div className="w-6 h-6 rounded-sm border border-[#272849] justify-center items-center gap-2.5 flex">
          <div className="w-3 h-3 relative bg-[#DBDCDE] rounded-[1.1875rem]" />
        </div>
        <div className="text-[#DBDCDE] text-xs font-medium uppercase leading-none">
          {title}
        </div>
      </div>
      <div className="self-stretch h-24 p-4 flex-col justify-center items-start gap-2 flex">
        <div className="text-white text-[1.625rem] font-medium leading-loose">
         {stats}
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="px-2 py-1 bg-[#0A3224] rounded justify-start items-center gap-1 flex">
            <div className="w-3.5 h-3.5 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/arrow-up.svg"}
                height={14}
                width={14}
                className=" cursor-pointer"
              />
            </div>
            <div className="text-green-400 text-xs font-normal leading-none">
              0%
            </div>
          </div>
          <div className="text-[#DBDCDE] text-xs font-normal leading-none">
            From yesterday
          </div>
        </div>
      </div>
    </div>
  );
}
