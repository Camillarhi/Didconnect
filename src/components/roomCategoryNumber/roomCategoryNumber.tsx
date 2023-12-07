import Link from "next/link";
import React from "react";

export default function RoomCategoryNumber({ id }: { id: string }) {
  return (
    <div className="w-full h-[80vh] flex-col justify-between items-start flex ">
      <div className=" flex-col gap-8 inline-flex">
        <div className="h-8 px-2 py-1.5 bg-indigo-950 rounded justify-start items-center inline-flex">
          <div className="text-center text-white text-xs font-medium leading-none">
            Maestro (12 Available)
          </div>
        </div>
        <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
          <div className="text-white text-sm font-normal leading-tight">
            Room number
          </div>
          <div className="self-stretch pl-3 pr-2 py-2 bg-gray-900 rounded border border-slate-600 justify-start items-center gap-2 inline-flex">
            <select
              name=""
              id=""
              className=" bg-transparent w-full focus:outline-none text-sm"
            >
              <option value="" className=" bg-black">
                Room 28
              </option>
              <option value="" className=" bg-black">
                Room 280
              </option>
              <option value="" className=" bg-black">
                Room 428
              </option>
              <option value="" className=" bg-black">
                Room 98
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full h-10 justify-end items-start gap-4 inline-flex">
        <Link
          href={`/customer/explore/hotel/${id}`}
          className="grow shrink basis-0 px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex"
        >
          <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
            Cancel
          </div>
        </Link>
        <Link
          href={`/customer/explore/hotel/${id}/preview`}
          className="grow shrink basis-0 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Next
          </div>
        </Link>
      </div>
    </div>
  );
}
