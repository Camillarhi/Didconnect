import CustomerRoomPreview from "@/components/customerRoomPreview/customerRoomPreview";
import CustomerWelcomeTab from "@/components/customerWelcomeTab/customerWelcomeTab";
import UnlockRoomButton from "@/components/unlockRoomButton/unlockRoomButton";
import CustomerLayout from "@/layouts/customer/customerLayout";
import Image from "next/image";
import React from "react";

export default function Home() {
  const isCheckedIn = true;

  return (
    <CustomerLayout>
      <CustomerWelcomeTab
        text={
          !isCheckedIn
            ? "How are you doing today?"
            : "How are you enjoying your stay at"
        }
        hotelName="Four seasons"
      />
      {!isCheckedIn && (
        <div className=" h-full flex justify-center items-center flex-col gap-y-[.625rem] w-full">
          <Image
            alt=""
            src={"/assets/images/welcome.png"}
            height={179.02}
            width={307.592}
          />
          <p className=" text-[#67687E] text-sm">
            Go to the explore page to find hotels
          </p>
        </div>
      )}

      {isCheckedIn && (
        <div className=" mt-8 h-full w-full">
          <UnlockRoomButton id="" />

          <CustomerRoomPreview />
        </div>
      )}
    </CustomerLayout>
  );
}
