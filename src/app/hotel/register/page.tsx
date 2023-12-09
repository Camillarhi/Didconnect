"use client";
import CategoryImages from "@/components/categoryImage/categoryImages";
import InputGroup from "@/components/input/inputGroup";
import Passcode from "@/components/passcode/passcode";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterHotel() {
  const [formSteps, setFormSteps] = useState<number>(3);

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <div className="justify-center md:pb-[1.875rem] items-center hidden md:inline-flex md:border-b border-[#272849] w-full">
        <Image
          alt=""
          src={"/assets/svgs/logo.svg"}
          height={17.74}
          width={151.11}
        />
      </div>

      {formSteps === 1 && <Passcode next={() => setFormSteps(2)} />}

      {formSteps === 2 && (
        <div className="md:flex md:justify-center md:items-center w-full md:mt-[3.5rem] md:flex-col">
          <div className=" md:w-[38.75rem] md:h-[23rem] md:border border-[#272849] md:shadow md:rounded-lg md:pt-6 md:pb-8 md:px-6">
            <RegisterTabGuide
              title="Set Up Your Profile"
              description="You have exclusive ownership of your data, and you alone have the right to decide when and how to share it"
            />
            <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex mt-6">
              <InputGroup
                label="Business Name"
                type="text"
                className="h-9 "
                placeHolder="Jordan Peters"
              />

              <InputGroup
                label="Business email address"
                type="text"
                className="h-9 "
                placeHolder="Jordan@Peters.com"
              />

              <InputGroup
                label="Phone number"
                type="text"
                className="h-9 "
                placeHolder="+234947993"
              />
            </div>
          </div>
          <div className=" mt-8 flex md:w-[38.75rem] justify-end">
            <div
              className="px-6 py-2.5 bg-primary rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
              onClick={() => setFormSteps(3)}
            >
              <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                Next
              </div>
            </div>
          </div>
        </div>
      )}
      {formSteps === 3 && (
        <div className="md:flex md:justify-center md:items-center w-full md:mt-[3.5rem] md:flex-col">
          <div className="md:w-[27rem] md:h-[30.375rem] px-4 pt-4 pb-6 md:rounded-lg md:shadow md:border border-[#272849] md:flex-col justify-start items-center gap-6 md:inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-white text-xs font-semibold uppercase leading-none">
                Media
              </div>
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                Upload a maximum of 5 pictures to give your guests a visual
                preview of the inviting atmosphere your hotel has to offer
              </div>
            </div>
            <div className="self-stretch h-[22.875rem] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[9.75rem] pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex border-b border-[#272849]">
                <div className="justify-start items-start gap-2 inline-flex">
                  <CategoryImages />
                  <CategoryImages />
                </div>
                <div
                  onClick={() =>
                    document.getElementById("upload-hotel-images")?.click()
                  }
                  className=" cursor-pointer w-[3.9375rem] h-11 pl-[1.375rem] pr-[1.3125rem] py-3 bg-gray-900 rounded-lg border border-slate-600 justify-center items-center inline-flex border-dashed"
                >
                  <Image
                    alt=""
                    src={"/assets/svgs/upload.svg"}
                    height={20}
                    width={20}
                  />
                  <input
                    type="file"
                    id="upload-hotel-images"
                    multiple
                    className=" hidden"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[7.375rem] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-sm font-normal leading-tight">
                  Description
                </div>
                <textarea
                  placeholder="Enter a detailed description"
                  defaultValue="Aston Hotel, Alice Springs NT 0870, Australia is a modern
                    hotel. elegant 5 star hotel overlooking the sea. perfect for
                    a romantic, charming"
                  className="self-stretch grow shrink basis-0 px-3 py-2 focus:outline-none bg-gray-900 rounded border border-slate-600 flex-col justify-start items-start gap-2.5 flex"
                ></textarea>
              </div>
              <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
                <div className="text-white text-sm font-normal leading-tight">
                  Facilities
                </div>
                <div className="self-stretch pl-3 pr-2 py-2 bg-gray-900 rounded border border-slate-600 justify-start items-center gap-2 inline-flex">
                  <select
                    name=""
                    id=""
                    className=" bg-transparent w-full focus:outline-none text-sm"
                  >
                    <option value="" className=" bg-black">
                      Select facilities available at your hotel
                    </option>
                    <option value="" className=" bg-black">
                      wifi
                    </option>
                    <option value="" className=" bg-black">
                      smart
                    </option>
                    <option value="" className=" bg-black">
                      break fast
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[27rem] h-10 items-start gap-2.5 flex mt-8 justify-end">
            <div
              className="px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              onClick={() => setFormSteps(2)}
            >
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Back
              </div>
            </div>
            <Link
              href={"/hotel"}
              className="px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
            >
              <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                Finish
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
