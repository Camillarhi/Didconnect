import CustomerWelcomeTab from "@/components/customerWelcomeTab/customerWelcomeTab";
import CustomerLayout from "@/layouts/customer/customerLayout";
import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <CustomerLayout>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
        <CustomerWelcomeTab
          title="Hello Rita,"
          text="How are you doing today?"
        />

        <div className=" mt-[3.5rem] flex flex-col justify-center items-center w-full h-full">
          <Image
            alt=""
            src={"/assets/svgs/coming-soon.svg"}
            height={270.85}
            width={270.85}
          />
          <div className="w-full text-center text-[#67687E] text-sm font-normal leading-tight">
            This is a feature we think you’d like, and currently working on it.
            Please be patient, you’ll be the first to know when it’s ready.
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
