import CustomerWelcomeTab from "@/components/customerWelcomeTab/customerWelcomeTab";
import CustomerLayout from "@/layouts/customer/customerLayout";
import Link from "next/link";
import React from "react";

export default function Profile() {
  const did = "did:key:z6MkuVEW9MmRiz92zC7nGvoTT2HJWS3rB533j79Y9Z1i8k6d";

  return (
    <CustomerLayout>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
        <CustomerWelcomeTab title="Your profile" />

        <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex">
          <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
            Personal information
          </div>
          <div className="self-stretch h-[13.25rem] flex-col justify-start items-start flex">
            <div className="self-stretch h-[3.75rem] pb-4 border-b border-[#272849] shadow-inner flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-300 text-xs font-normal leading-none">
                Name
              </div>
              <div className="text-white text-sm font-medium capitalize leading-tight">
                Jordan Peters
              </div>
            </div>
            <div className="self-stretch h-[4.75rem] py-4 border-b border-[#272849] shadow-inner flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-300 text-xs font-normal leading-none">
                Email address
              </div>
              <div className="text-white text-sm font-medium lowercase leading-tight">
                hello@gmail.com
              </div>
            </div>
            <div className="self-stretch h-[4.75rem] py-4 border-b border-[#272849] shadow-inner flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-300 text-xs font-normal leading-none">
                Phone number
              </div>
              <div className="text-white text-sm font-medium capitalize leading-tight">
                +234 8109955743
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-36 px-3 pt-3 pb-4 rounded border border-indigo-950 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
            <div className="text-zinc-300 text-xs font-normal leading-none">
              DID
            </div>
            <div className="self-stretch break-all text-white text-sm font-normal leading-tight">
              {did}
            </div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <Link
              href={`/customer/profile/${did}`}
              className="px-3 py-1.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex"
            >
              <div className="text-center text-violet-300 text-xs font-medium leading-none">
                Share QR Code
              </div>
            </Link>
            <div className="w-28 px-3 py-1.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-xs font-medium leading-none">
                Copy DID
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
