"use client";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "react18-input-otp";

export default function Passcode() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);
  const [isPasswordEqual, setIsPasswordEqual] = useState<boolean>(true);
  const router = useRouter();

  const handlePasswordChange = (enteredOtp: any) => {
    setPassword(enteredOtp);
  };

  const handleConfirmPasswordChange = (enteredOtp: any) => {
    setConfirmPassword(enteredOtp);

    if (enteredOtp === password) {
      setIsPasswordEqual(() => true);
    } else {
      setIsPasswordEqual(() => false);
    }
  };

  const onSubmitPassword = () => {
    if (password?.length < 6) {
      alert("passcode must be up to 6");
    }

    setIsConfirmPassword(true);
  };

  const onSubmitConfirmPassword = () => {
    if (password !== confirmPassword) {
      alert("password and confirm password must be the same!");
      return;
    }
    router.replace("/customer/register");
  };

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <RegisterTabGuide
        title="Set Up A Passcode"
        description="Please set up a 6-digit passcode to keep your wallet safe"
      />
      <div className=" mt-16">
        {!isConfirmPassword && (
          <OtpInput
            value={password}
            onChange={handlePasswordChange}
            numInputs={6}
            isInputNum
            isInputSecure
            inputStyle={
              "w-6 h-6 bg-gray-900 rounded-sm border border-slate-600"
            }
            containerStyle={
              "w-full h-fit justify-center items-center gap-4 inline-flex"
            }
            onSubmit={() => onSubmitPassword()}
          />
        )}

        {isConfirmPassword && (
          <OtpInput
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            numInputs={6}
            isInputNum
            isInputSecure
            inputStyle={`w-6 h-6 bg-gray-900 rounded-sm border ${
              isPasswordEqual ? "border-slate-600" : "border-red-300"
            } `}
            containerStyle={
              "w-full h-fit justify-center items-center gap-4 inline-flex"
            }
            onSubmit={() => onSubmitConfirmPassword()}
          />
        )}
      </div>

      <div className="text-center text-[#DBDCDE] text-sm font-normal leading-tight mt-6">
        {isConfirmPassword ? "Confirm your passcode" : "Create your passcode"}
      </div>
    </div>
  );
}