"use client";
import FormSteps from "@/components/formSteps/formSteps";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import RoomCategory from "@/components/roomCategory/roomCategory";
import RoomCategoryNumber from "@/components/roomCategoryNumber/roomCategoryNumber";
import React, { useState } from "react";

export default function BookingInformation({
  params: { id },
}: {
  params: { id: string };
}) {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack
        text={"Booking Information"}
        backgroundColor="bg-[#151628]"
      />
      <div className=" w-full h-full mt-6">
        <FormSteps
          steps={[
            {
              name: "Room category",
              current: step === 1,
              completed: step === 2,
            },
            { name: "Room number", current: step === 2, completed: false },
          ]}
        />

        <div className=" mt-8">
          {step === 1 && (
            <div className=" flex flex-col gap-y-8">
              <RoomCategory onClick={() => setStep(() => 2)} />
              <RoomCategory onClick={() => setStep(() => 2)} />
              <RoomCategory onClick={() => setStep(() => 2)} />
              <RoomCategory onClick={() => setStep(() => 2)} />
              <RoomCategory onClick={() => setStep(() => 2)} />
              <RoomCategory onClick={() => setStep(() => 2)} />
            </div>
          )}

          {step === 2 && <RoomCategoryNumber id={id} />}
        </div>
      </div>
    </div>
  );
}
