import CategoryImages from "@/components/categoryImage/categoryImages";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <HotelLayout>
      <div className="self-stretch h-[41.3125rem] px-[1.875rem] pt-6 pb-8 flex-col justify-start items-center gap-[1.875rem] flex">
        <div className="w-full text-white text-[1.625rem] font-medium leading-loose">
          Your profile
        </div>
        <div className="justify-center items-start gap-[1.875rem] inline-flex">
          <div className="w-[38.75rem] px-4 pt-4 pb-6 rounded-lg shadow border border-indigo-950 flex-col justify-start items-center gap-6 inline-flex">
            <div className="self-stretch h-[15.25rem] flex-col justify-start items-start gap-4 flex">
              <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
                Account information
              </div>
              <div className="self-stretch h-[13.25rem] flex-col justify-start items-start flex">
                <div className="self-stretch h-[3.75rem] pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex border-[#272849] border-b">
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    Business name
                  </div>
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    Transcorp Hilton
                  </div>
                </div>
                <div className="self-stretch h-[4.75rem] py-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex border-[#272849] border-b">
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    Business email address
                  </div>
                  <div className="text-white text-sm font-medium lowercase leading-tight">
                    hello@gmail.com
                  </div>
                </div>
                <div className="self-stretch h-[4.75rem] py-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex border-[#272849] border-b">
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    Phone number
                  </div>
                  <div className="text-white text-sm font-medium capitalize leading-tight">
                    +234 8109955743
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex border-[#272849] border-r">
                <div className="text-center text-white text-sm font-normal leading-tight">
                  Share your QR Code
                </div>
                <div className="w-[12.4375rem] h-[12.4375rem] relative">
                  <div className="w-[12.4375rem] h-[12.4375rem] left-0 top-0 absolute"></div>
                </div>
              </div>
              <div className="w-[15.125rem] flex-col justify-start items-start gap-6 inline-flex ">
                <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    DID
                  </div>
                  <div className="self-stretch text-white break-all text-sm font-normal leading-tight">
                    did:key:z6MkuVEW9MmRiz92zC7nGvoTT2HJWS3rB533j79Y9Z1i8k6d
                  </div>
                </div>
                <div className="px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer">
                  <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                    Copy DID
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[23.25rem] px-4 pt-4 pb-6 bg-gray-900 rounded-md border border-indigo-950 flex-col justify-start items-start inline-flex">
            <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-[#272849] border-b">
              <div className="text-white text-xs font-medium uppercase leading-none">
                HOTEL Information
              </div>
              <Link
                href={"/hotel/profile/edit"}
                className="text-center text-violet-300 text-sm font-medium capitalize leading-tight"
              >
                Edit
              </Link>
            </div>
            <div className="self-stretch h-[15.5rem] pt-4 pb-6 bg-gray-900 shadow-inner flex-col justify-center items-start gap-2 flex border-[#272849] border-b">
              <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
                Media
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <CategoryImages />
                <CategoryImages />
                <CategoryImages />
                <CategoryImages />
              </div>
            </div>
            <div className="self-stretch h-[6.875rem] py-4 bg-gray-900 shadow-inner flex-col justify-center items-start gap-6 flex">
              <div className="self-stretch h-[4.875rem] flex-col justify-start items-start gap-0.5 flex">
                <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
                  Description
                </div>
                <div className="self-stretch text-white text-sm font-medium capitalize leading-tight">
                  Aston Hotel, Alice Springs NT 0870, Australia is a modern
                  hotel. elegant 5 star hotel overlooking the sea. perfect for a
                  romantic, charming
                </div>
              </div>
            </div>
            <div className="self-stretch h-[4.5rem] pt-4 bg-gray-900 flex-col justify-start items-start gap-4 flex">
              <div className="text-zinc-300 text-[.625rem] font-normal leading-none">
                Facilities
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
                  <div className="w-3 h-3 justify-center items-center flex">
                    <Image
                      alt=""
                      src={"/assets/svgs/wifi-icon.svg"}
                      height={12}
                      width={12}
                      className=" rounded-md"
                    />
                  </div>
                  <div className="text-white text-[.625rem] font-normal leading-none">
                    Free Wifi
                  </div>
                </div>
                <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
                  <div className="w-3 h-3 justify-center items-center flex">
                    <Image
                      alt=""
                      src={"/assets/svgs/breakfast-bell.svg"}
                      height={12}
                      width={12}
                      className=" rounded-md"
                    />
                  </div>
                  <div className="text-white text-[.625rem] font-normal leading-none">
                    Free Breakfast
                  </div>
                </div>
                <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
                  <div className="w-3 h-3 justify-center items-center flex">
                    <Image
                      alt=""
                      src={"/assets/svgs/smart-icon.svg"}
                      height={12}
                      width={12}
                      className=" rounded-md"
                    />
                  </div>
                  <div className="text-white text-[.625rem] font-normal leading-none">
                    Smart facilities
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
