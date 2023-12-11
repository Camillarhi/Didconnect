"use client";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar({ toggle }: { toggle: () => void }) {
  const { web5 } = useWeb5Instance() || {};
  const [myRecords, setMyRecords] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (web5) getRecords();
  }, [web5]);

  const getRecords = async () => {
    const { record } = await web5.dwn.records.create({
      data: { name: "Transcorp Hilton", age: 30 },
      message: {
        dataFormat: "application/json",
      },
    });
    const readResult = await record?.data.text();
    setMyRecords(readResult);
  };

  console.log({myRecords})

  return (
    <div className="bg-[#151628] h-[3.5rem] w-full flex justify-between items-center px-[1.875rem] py-4 shadow-inner border-b border-[#272849] text-white">
      <div
        className="w-[9.3125rem] h-[2.625rem] px-[1.375rem] justify-start items-center inline-flex md:hidden"
        onClick={() => toggle()}
      >
        <Image alt="" src={"/assets/svgs/logo.svg"} height={400} width={500} />
      </div>
      <div className=" hidden md:block">
        <BreadCrumbs />
      </div>
      <div className=" flex gap-x-4 w-[10.875rem] h-6">
        <div className="w-[8.875rem] h-6 justify-start items-center gap-1 inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div
              className="w-6 h-6 justify-center items-center flex cursor-pointer"
              onClick={() => router.replace("/hotel/profile")}
            >
              <div className="w-6 h-6 px-[.2075rem] pt-[.4844rem] pb-[.5075rem] bg-violet-700 rounded-[6.25rem] justify-center items-center inline-flex">
                <div className="w-[1.0844rem] h-[.5075rem] text-center text-white text-[.625rem] font-semibold leading-none">
                  TH
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-xs font-normal leading-none">
            {JSON.parse(myRecords)?.name}
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative cursor-pointer">
              <Image
                alt=""
                src={"/assets/svgs/down-arrow.svg"}
                height={16}
                width={16}
              />
            </div>
          </div>
        </div>
        <Image
          alt=""
          src={"/assets/svgs/bell.svg"}
          height={16}
          width={16}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}
