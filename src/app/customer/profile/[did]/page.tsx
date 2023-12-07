"use client";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import Image from "next/image";
import React, { useEffect } from "react";

export default function DIDQr({
  params: { did },
}: {
  params: { did: string };
}) {
  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Create a URL object
    const url = new URL(currentUrl);

    // Get the value of the 'did' parameter
    const didParam = url.searchParams.get("did");

    // Log the value to the console (you can use it as needed)
    console.log(didParam);
  }, []);

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack text={"Your QR Code"} backgroundColor="bg-[#151628]" />
      <div className=" h-[90vh] w-full mt-6 flex justify-between flex-col">
        <div>
          <div className="w-full text-center text-[#DBDCDE] text-sm font-normal leading-tight">
            Share your QR Code{" "}
          </div>

          <div className="self-stretch h-[24.75rem] flex-col justify-start items-center gap-6 flex">
            <div className="w-[12.4375rem] h-[12.4375rem] relative">
              <Image alt="" src={"/images"} height={199} width={199} />
            </div>
            <div className="w-full h-16 flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-zinc-300 text-xs font-normal leading-none">
                DID
              </div>
              <div className="self-stretch text-white text-sm font-normal leading-tight">
                {decodeURIComponent(did)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-10 cursor-pointer px-6 py-2.5 bg-primary rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Copy DID
          </div>
        </div>
      </div>
    </div>
  );
}
