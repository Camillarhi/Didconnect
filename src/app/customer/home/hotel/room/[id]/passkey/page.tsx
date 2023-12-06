"use client";
import { useState } from "react";
import OtpInput from "react18-input-otp";

export default function Passkey({ params: { id } }: { params: { id: any } }) {
  const [otp, setOtp] = useState("");

  const handleChange = (enteredOtp: any) => {
    setOtp(enteredOtp);
  };

  return (
    <div>
      Passkey {id}
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        isInputNum
        isInputSecure
        inputStyle={
          "w-6 h-6 bg-gray-900 rounded-sm border border-slate-600"
        }
        containerStyle={
          "w-full h-fit justify-center items-center gap-4 inline-flex"
        }
      />
    </div>
  );
}
