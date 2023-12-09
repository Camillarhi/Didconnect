"use client";
import EnterPassCode from "@/components/enterPassCode/enterPassCode";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const onSubmitPassword = () => {
    if (password?.length < 6) {
      alert("passcode must be up to 6");
    }

    router.replace("/hotel");
  };

  return (
    <EnterPassCode
      password={password}
      setPassword={setPassword}
      onSubmitPassword={onSubmitPassword}
    />
  );
}
