import HotelLayout from "@/layouts/hotel/hotelLayout";
import Image from "next/image";
import React from "react";

export default function AddNewGuest() {
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
                Add New Guest
              </div>
            </div>

            <div className=" w-[38.3125rem] mt-[1.875rem] px-6 pt-6 pb-8">
              <div className="w-full h-9 flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-center text-white text-xs font-medium uppercase leading-none">
                  Share DID
                </div>
                <div className="text-center text-zinc-300 text-xs font-normal leading-none">
                  Share your DID with the guest
                </div>
              </div>
              <div className="w-[35.3125rem] h-[21.8125rem] pt-[5.125rem] flex-col justify-center items-center gap-6 inline-flex">
                <div className="w-[12.4375rem] h-[12.4375rem] relative">
                  <div className="w-[12.4375rem] h-[12.4375rem] left-0 top-0 absolute"></div>
                </div>
                <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                  <div className="text-zinc-300 text-xs font-normal leading-none">
                    DID
                  </div>
                  <div className="self-stretch text-white text-sm font-normal leading-tight">
                    did:key:z6MkuVEW9MmRiz92zC7nGvoTT2HJWS3rB533j79Y9Z1i8k6d
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
