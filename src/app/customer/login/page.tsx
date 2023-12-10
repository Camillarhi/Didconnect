"use client";
import EnterPassCode from "@/components/enterPassCode/enterPassCode";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useHashValue from "@/hooks/useHashValue";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { myAccount } = useGetUserAccount();
  const { hashString } = useHashValue();
  const [hashpassword, setHashPassword] = useState<string>("");

  useEffect(() => {
    if (password?.length === 6) {
      hashString(password).then((hash) => {
        setHashPassword(hash);
      });
    }
  }, [password]);

  useEffect(() => {
    if (myAccount) {
    }
  }, [myAccount]);

  const onSubmitPassword = () => {
    if (password?.length < 6) {
      alert("passcode must be up to 6");
    }

    if (!myAccount) {
      alert("no account found");
    }

    if (myAccount?.passkey !== hashpassword) {
      alert("incorrect passcode");
    } else {
      router.replace("/customer/home");
    }
  };

  return (
    <EnterPassCode
      password={password}
      setPassword={setPassword}
      onSubmitPassword={onSubmitPassword}
    />
  );
}
