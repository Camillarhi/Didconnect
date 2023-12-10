"use client";
import useAccount from "@/hooks/useAccount";
import useCustomer from "@/hooks/useCustomer";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useHashValue from "@/hooks/useHashValue";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import { AccountType } from "@/types/account.type";
import { CustomerType } from "@/types/customer.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRegister() {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [password, setPassword] = useState<string>("");
  const [hashpassword, setHashPassword] = useState<string>("");
  const { hashString } = useHashValue();
  const { web5, myDid } = useWeb5Instance() || {};
  const { createAccount } = useAccount(web5);
  const { createCustomer } = useCustomer(web5);
  const router = useRouter();
  const { myAccount } = useGetUserAccount();

  useEffect(() => {
    if (formSteps === 2) {
      hashString(password).then((hash) => {
        setHashPassword(hash);
      });
    }
  }, [formSteps]);

  useEffect(() => {
    if (myAccount?.accountType === "guest") {
      router.replace("/customer/login");
      return;
    }
    if (myAccount?.accountType === "hotelOwner") {
      router.replace("/hotel/login");
      return;
    }
  }, [myAccount]);

  const submit = async (data: CustomerType) => {
    const account: AccountType = {
      passkey: hashpassword,
      accountType: "guest",
      "@type": "account",
    };

    await createAccount(account);
    await createCustomer(data);
  };

  return { formSteps, setFormSteps, password, setPassword, submit };
}
