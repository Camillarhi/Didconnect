"use client";
import AlertBox from "@/components/alertBox/alertBox";
import Input from "@/components/input/input";
import Pagination from "@/components/pagination/pagination";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import Image from "next/image";
import React from "react";

export default function Alerts() {
  return (
    <HotelLayout>
      <div className=" w-full flex justify-center items-center">
        <div className=" w-[38.75rem] h-full">
          <div className="w-full h-12 flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/back.svg"}
                  height={24}
                  width={24}
                  className=" cursor-pointer"
                />
              </div>
              <div className="text-white text-base font-semibold leading-normal">
                Alerts
              </div>
            </div>
            <div className="text-zinc-300 text-xs font-normal leading-none">
              You have 2300 rooms
            </div>
          </div>

          <div className=" w-full border border-indigo-950 rounde-md mt-[1.875rem] h-[43.4375rem]">
            <div className="w-full h-[4.5rem] px-6 py-[1.125rem] gap-x-4 justify-between items-center inline-flex border-b-4 border-indigo-950">
              <div className=" h-8 justify-start items-start gap-0.5 flex w-[16.375rem]">
                <div className="w-fit px-2 py-1.5 bg-indigo-950 rounded justify-start items-center flex cursor-pointer">
                  <div className="text-center text-violet-300 text-xs font-medium leading-none">
                    All alerts
                  </div>
                </div>
                <div className="px-3 py-2 rounded justify-start items-center flex cursor-pointer">
                  <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                    Security
                  </div>
                </div>
                <div className="px-3 py-2 rounded justify-start items-center flex cursor-pointer">
                  <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                    Noise
                  </div>
                </div>
              </div>
              <div className="h-9 items-center gap-2 flex w-[18.375rem]">
                <div className=" relative w-[9.75rem]">
                  <Input
                    placeHolder="Search"
                    type="search"
                    className="h-9 pl-9"
                  />
                  <div className=" ml-2 absolute inset-y-0 left-0 flex items-center">
                    <Image
                      alt=""
                      src={"/assets/svgs/search.svg"}
                      height={20}
                      width={20}
                    />
                  </div>
                </div>
                <div className=" border w-[8.125rem] h-full border-indigo-950">
                  <select
                    name=""
                    id=""
                    className=" bg-transparent w-full focus:outline-none text-sm"
                  >
                    <option value="" className=" bg-black">
                      Last 7 days
                    </option>
                    <option value="" className=" bg-black">
                      Last 5 days
                    </option>
                    <option value="" className=" bg-black">
                      Last 1 days
                    </option>
                    <option value="" className=" bg-black">
                      Last 10 days
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <AlertBox title="Guest check-out" status="bg-indigo-950" />
              <AlertBox
                title="Attempted security breach"
                status="bg-rose-600"
              />
              <AlertBox title="Guest check-out" status="bg-indigo-950" />
              <AlertBox title="Guest check-in" status="bg-indigo-950" />
              <AlertBox title="Guest check-in" status="bg-indigo-950" />
              <AlertBox title="Guest check-in" status="bg-indigo-950" />{" "}
              <AlertBox title="Guest check-out" status="bg-indigo-950" />
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
