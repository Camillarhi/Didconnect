import Image from "next/image";
import React from "react";

export default function Hotel() {
  return (
    <div className="w-full self-stretch h-fit pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-4 flex border-[#272849] border-b">
      <div className="w-full bg-white rounded-lg justify-center items-center inline-flex">
        <Image
          alt=""
          src={"/assets/images/hotel.png"}
          height={230.363}
          width={345.545}
          className=" rounded-md"
        />
      </div>
      <div className="self-stretch h-[5.25rem] flex-col justify-start items-start gap-2 flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="text-white text-base font-semibold leading-normal">
            Four Seasons
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/location.svg"}
                  height={14}
                  width={14}
                  className=" rounded-md"
                />
              </div>
              <div className="text-white text-xs font-normal leading-none">
                California, USA
              </div>
            </div>
            <div className=" h-full w-[.0625rem] bg-[#272849]"></div>
            <div className="justify-start items-center gap-1 flex">
              <div className="justify-center items-center gap-0.5 flex">
                <div className="w-4 h-4 justify-center items-center flex">
                  <Image
                    alt=""
                    src={"/assets/svgs/star.svg"}
                    height={16}
                    width={16}
                    className=" rounded-md"
                  />
                </div>
              </div>
              <div className="text-center text-white text-xs font-normal leading-none">
                4.9
              </div>
              <div className="text-center text-violet-300 text-xs font-normal leading-none">
                (24 reviews)
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-white text-[1.625rem] font-medium leading-loose">
            $400
          </span>
          <span className="text-gray-500 text-xs font-normal leading-none">
            /night
          </span>
        </div>
      </div>
    </div>
  );
}
