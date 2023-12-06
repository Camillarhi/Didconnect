"use client";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "react18-input-otp";

export default function Passcode({
  params: { id },
}: {
  params: { id: string };
}) {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handlePasswordChange = (enteredOtp: any) => {
    setPassword(enteredOtp);
  };

  const onSubmitPassword = () => {
    if (password?.length < 6) {
      alert("passcode must be up to 6");
    }

    router.replace(`/customer/home/hotel/room/${id}/room-key`);
  };

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <RegisterTabGuide
        title="Enter Your Passcode"
        description="Please enter your passcode for access to your mobile room key"
      />
      <div className=" mt-16">
        <OtpInput
          value={password}
          onChange={handlePasswordChange}
          numInputs={6}
          isInputNum
          isInputSecure
          inputStyle={"w-6 h-6 bg-gray-900 rounded-sm border border-slate-600"}
          containerStyle={
            "w-full h-fit justify-center items-center gap-4 inline-flex"
          }
          onSubmit={() => onSubmitPassword()}
        />
      </div>

      <div className="text-center text-[#DBDCDE] text-sm font-normal leading-tight mt-6">
        Enter your passcode
      </div>
    </div>
  );
}
