"use client";
import AlertBox from "@/components/alertBox/alertBox";
import Input from "@/components/input/input";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import Image from "next/image";

export default function RoomDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <HotelLayout>
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
          {id}
        </div>
      </div>

      <div className=" mt-[1.875rem] flex w-full justify-between flex-col md:flex-row gap-[1.875rem]">
        {/* 1 */}
        <div className=" w-[19.0938rem] flex flex-col gap-[1.875rem]">
          <div className="w-full h-[16.5rem] px-4 pt-4 pb-6 bg-gray-900 rounded-md border border-indigo-950 flex-col justify-start items-start inline-flex">
            <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-start items-start gap-2 inline-flex border-b border-indigo-950">
              <div className="text-white text-sm font-medium capitalize leading-tight">
                Current Guest
              </div>
            </div>
            <div className="self-stretch h-36 py-4 bg-gray-900 shadow-inner flex-col justify-center items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="w-9 h-9 justify-center items-center flex">
                    <div className="w-9 h-9 px-[.3113rem] pt-[.7269rem] pb-[.7612rem] bg-violet-800 rounded-full justify-center items-center inline-flex">
                      <div className="w-[1.6269rem] h-[.7612rem] text-center text-white text-sm font-medium leading-tight">
                        SC
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-semibold leading-normal">
                    Sean Carter
                  </div>
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    sean@gmail.com
                  </div>
                </div>
              </div>
              <div className="self-stretch h-14 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
                    Check-in
                  </div>
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    25 Dec, 2023
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex ">
                  <div className="text-zinc-300 text-[.625rem]font-normal leading-none">
                    Check-out
                  </div>
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    25 Dec, 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch pt-4 bg-gray-900 justify-start items-start gap-6 inline-flex border-t border-indigo-950">
              <div className="px-3 py-1.5 bg-emerald-950 rounded-[1.9375rem] justify-center items-start gap-2.5 flex">
                <div className="text-green-400 text-xs font-normal leading-none">
                  Checked-in
                </div>
              </div>
            </div>
          </div>
          <div className="w-[19.0938rem] h-[12.5rem] px-4 pt-4 pb-6 bg-gray-900 rounded-md border border-indigo-950 flex-col justify-start items-start inline-flex">
            <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-b border-indigo-950">
              <div className="text-white text-sm font-medium capitalize leading-tight">
                Room info
              </div>
              <div className="w-5 h-5 relative" />
            </div>
            <div className="self-stretch h-[7.75rem] py-4 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-[.625rem]font-normal leading-none">
                  Room number
                </div>
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  101
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-[.625rem]font-normal leading-none">
                  Room category
                </div>
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  Pantheon
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-[.625rem]font-normal leading-none">
                  Price
                </div>
                <div>
                  <span className="text-white text-sm font-medium capitalize leading-tight">
                    $3,500
                  </span>
                  <span className="text-gray-500 text-[.625rem]font-normal leading-none">
                    /night
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className=" w-[35rem] ">
          <div className=" w-full border border-indigo-950 rounde-md h-[40.4375rem]">
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
              <AlertBox title="Guest check-in" status="bg-indigo-950" />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" w-[19.0625rem]">
          <div className="w-[19.0938rem] h-[22.75rem] px-4 pt-4 pb-6 bg-gray-900 rounded-md border border-indigo-950 flex-col justify-start items-start inline-flex">
            <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-start items-start gap-2 inline-flex border-b border-indigo-950">
              <div className="text-white text-sm font-medium capitalize leading-tight">
                Permissions
              </div>
            </div>
            <div className="self-stretch h-72 flex-col justify-start items-start flex ">
              <div className="self-stretch py-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-b border-indigo-950">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    Ramona Siwes
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      Cleaning
                    </div>
                    <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      2hr
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-yellow-950 rounded-[1.9375rem] justify-center items-start gap-2.5 flex">
                  <div className="text-amber-400 text-xs font-normal leading-none">
                    Pending
                  </div>
                </div>
              </div>
              <div className="self-stretch py-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-b border-indigo-950">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    Musky Lore
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      Room service
                    </div>
                    <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      1hr
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-emerald-950 rounded-[1.9375rem] justify-center items-start gap-2.5 flex">
                  <div className="text-green-400 text-xs font-normal leading-none">
                    Approved
                  </div>
                </div>
              </div>
              <div className="self-stretch py-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-b border-indigo-950">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    Jezzy Lain
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      Guest
                    </div>
                    <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
                    <div className="text-zinc-300 text-xs font-normal leading-none">
                      1d
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-emerald-950 rounded-[1.9375rem] justify-center items-start gap-2.5 flex">
                  <div className="text-green-400 text-xs font-normal leading-none">
                    Approved
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[4.5rem] py-4 bg-gray-900 flex-col justify-start items-start gap-1 flex">
                <div className="px-6 py-2.5 rounded-[6.25rem] border border-violet-300 flex-col justify-center items-center gap-2 flex">
                  <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                    Request access to room
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
