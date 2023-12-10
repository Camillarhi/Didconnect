"use client";
import { AccountType } from "@/types/account.type";
import { useEffect, useState } from "react";
import useAccount from "./useAccount";
import useWeb5Instance from "./useWeb5Instance";

export default function useGetUserAccount() {
  const [myAccount, setMyAccount] = useState<AccountType | undefined>();
  const { myDid, web5 } = useWeb5Instance() || {};
  const { getSingleAccount } = useAccount(web5);

  useEffect(() => {
    if (web5) {
      getRecords();
    }
  }, [web5]);

  const getRecords = async () => {
    console.log({ myDid });
    const readResult = await getSingleAccount();
    setMyAccount(readResult);
  };

  console.log({ myAccount }, { myDid }, { web5 });
  return { myAccount };
}
