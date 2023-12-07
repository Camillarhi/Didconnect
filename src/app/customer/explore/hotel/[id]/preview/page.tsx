"use client";
import CategoryImages from "@/components/categoryImage/categoryImages";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import SuccessModal from "@/components/modals/successModal";
import { useDisclosure } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function Preview({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const {
    open: openSuccesModal,
    isOpen: isSuccesModalOpen,
    close: closeSuccesModal,
  } = useDisclosure();

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack
        text={"Preview"}
        backgroundColor="bg-[#151628]"
        rightText="Edit booking"
        rightTextClick={() =>
          router.replace(`/customer/explore/hotel/${id}/booking-information`)
        }
      />
      <div className="w-full h-[95vh] mt-6 px-4 pt-6 pb-10 flex-col justify-between items-center inline-flex">
        <div className="self-stretch h-[26.25rem] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-[164px] pb-4 bg-gray-900 shadow-inner flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <CategoryImages />
              <CategoryImages />
              <CategoryImages />
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  Room 101
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="w-3.5 h-3.5 justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative"></div>
                  </div>
                  <div className="text-center text-white text-xs font-normal leading-none">
                    4.9
                  </div>
                  <div className="text-center text-violet-300 text-xs font-normal leading-none">
                    (24 reviews)
                  </div>
                </div>
              </div>
              <div className="w-16 px-2 py-1.5 bg-indigo-950 rounded justify-start items-center flex">
                <div className="text-center text-white text-xs font-medium leading-none">
                  Maestro
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
                Schedule
              </div>
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Edit
              </div>
            </div>
            <div className="self-stretch h-16 pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-xs font-normal leading-none">
                  Check-in
                </div>
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  24 dec, 2023
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-xs font-normal leading-none">
                  Check-out
                </div>
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  26 dec, 2023
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[124px] flex-col justify-start items-start gap-4 flex">
            <div className="text-zinc-300 text-xs font-medium uppercase leading-none">
              Pricing
            </div>
            <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-xs font-normal leading-none">
                  Price
                </div>
                <div>
                  <span className="text-white text-sm font-medium capitalize leading-tight">
                    $400
                  </span>
                  <span className="text-gray-500 text-xs font-normal leading-none">
                    /night
                  </span>
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-300 text-xs font-normal leading-none">
                  Duration
                </div>
                <div className="text-white text-sm font-medium capitalize leading-tight">
                  8 days
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-zinc-300 text-xs font-normal leading-none">
                Total
              </div>
              <div className="text-white text-xl font-semibold leading-7">
                $2,400
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
          onClick={() => openSuccesModal()}
        >
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Pay $2,400
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={isSuccesModalOpen}
        close={() => {
          close();
          closeSuccesModal();
        }}
      />{" "}
    </div>
  );
}
