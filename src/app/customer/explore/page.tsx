"use client";
import CustomerWelcomeTab from "@/components/customerWelcomeTab/customerWelcomeTab";
import Hotel from "@/components/hotel/hotel";
import Input from "@/components/input/input";
import CustomerLayout from "@/layouts/customer/customerLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Explore() {
  return (
    <CustomerLayout>
      <CustomerWelcomeTab
        text="Where would you like to go?"
      />
      <div className=" my-6 flex items-center w-full h-fit gap-x-2">
        <div className=" relative w-full">
          <Input
            placeHolder="Search by location, name, DID"
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
        <Link href={"/customer/explore/scan"}>
          <Image alt="" src={"/assets/svgs/scan.svg"} height={32} width={32} />
        </Link>
      </div>

      <div className=" flex flex-col gap-y-8 w-full">
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </CustomerLayout>
  );
}
