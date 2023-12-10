"use client";
import CustomerWelcomeTab from "@/components/customerWelcomeTab/customerWelcomeTab";
import Hotel from "@/components/hotel/hotel";
import Input from "@/components/input/input";
import useHotel from "@/hooks/useHotel";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import CustomerLayout from "@/layouts/customer/customerLayout";
import { AccountType } from "@/types/account.type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Explore() {
  const [myAccount, setMyAccount] = useState<any>();
  const { myDid, web5 } = useWeb5Instance() || {};
  const { getAllHotels,getSingleHotel, } = useHotel(web5);

  useEffect(() => {
    if (web5) {
      getRecords();
    }
  }, [web5]);

  const getRecords = async () => {
    const readResult = await getAllHotels();
    const hh = await getSingleHotel("bafyreicdph6bwtwwrgws4tyy4nlacgff4powsv2gsjplg5vflnlf5ee3yu")
    console.log({hh})
    setMyAccount(readResult);
  };

  console.log({myAccount})

  return (
    <CustomerLayout>
      <CustomerWelcomeTab
        title=" Hello Rita,"
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
