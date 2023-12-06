"use client";
import Checkbox from "@/components/checkBox/checkbox";
import Input from "@/components/input/input";
import InputGroup from "@/components/input/inputGroup";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import Link from "next/link";
import React from "react";

export default function PersonalDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack
        text={"Share Your Personal Details"}
        backgroundColor="bg-[#151628]"
      />
      <div className=" w-full mt-6">
        <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-start inline-flex">
            <Checkbox label="Share all" />
          </div>

          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <InputGroup
              label="Name"
              type="text"
              className="h-9 "
              placeHolder="Jordan Peters"
            />
            <div className="justify-start items-start inline-flex">
              <Checkbox label="Share with hotel" />
            </div>
          </div>

          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <InputGroup
              label="Email address"
              type="text"
              className="h-9 "
              placeHolder="Jordan@Peters.com"
            />
            <div className="justify-start items-start inline-flex">
              <Checkbox label="Share with hotel" />
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <InputGroup
              label="Phone number"
              type="text"
              className="h-9 "
              placeHolder="+23490883932"
            />
            <div className="justify-start items-start inline-flex">
              <Checkbox label="Share with hotel" />
            </div>
          </div>

          <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
            <div className="text-white text-sm font-normal leading-tight">
              From
            </div>

            <Input type="date" className="h-9 " placeHolder="Guest" />
          </div>
          <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
            <div className="text-white text-sm font-normal leading-tight">
              To
            </div>
            <Input type="date" className="h-9 " />
          </div>
        </div>

        <div className="w-full h-10 justify-end items-start gap-4 inline-flex mt-5">
          <Link
            href={`/customer/explore/hotel/${id}`}
            className="grow shrink basis-0 px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex"
          >
            <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
              Cancel
            </div>
          </Link>
          <div className="grow shrink basis-0 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-medium capitalize leading-tight">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
