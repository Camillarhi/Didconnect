import Image from "next/image";
import React from "react";
import CategoryImages from "../categoryImage/categoryImages";

export default function RoomCategory({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full h-[15.5rem] pb-6 shadow-inner flex-col justify-start items-start gap-2 inline-flex border-b border-[#272849]">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <CategoryImages />
        <CategoryImages />
        <CategoryImages />
      </div>
      <div className="self-stretch h-32 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-white text-sm font-medium capitalize leading-tight">
              Pantheon
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/star.svg"}
                  height={14}
                  width={14}
                  className=" rounded-md"
                />
              </div>
              <div className="text-center text-white text-xs font-normal leading-none">
                4.9
              </div>
              <div className="text-center text-violet-300 text-xs font-normal leading-none">
                (24 reviews)
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-end gap-1 inline-flex">
            <div>
              <span className="text-white text-sm font-medium capitalize leading-tight">
                $3,500
              </span>
              <span className="text-gray-500 text-xs font-normal leading-none">
                /night
              </span>
            </div>
            <div className="px-1.5 py-0.5 bg-indigo-950 rounded justify-start items-center gap-1 inline-flex">
              <div className="text-white text-[.625rem] font-normal leading-none">
                5th Floor
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
          A penthouse of 5 master bedrooms and 1 guest room. The rooms in this
          category
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="text-green-400 text-[.625rem] font-normal leading-none">
              50 rooms available
            </div>
            <div className="w-3 h-3 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/green-check.svg"}
                height={12}
                width={12}
                className=" rounded-md"
              />
            </div>
          </div>
          <div
            className="px-4 py-1.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
            onClick={onClick}
          >
            <div className="text-center text-white text-xs font-medium leading-none">
              Choose Room
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
