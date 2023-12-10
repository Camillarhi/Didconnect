"use client";
import { AccountType } from "@/types/account.type";
import { useEffect, useState } from "react";
import useAccount from "./useAccount";
import useWeb5Connect from "./useWeb5Connect";

export default function useGetUserAccount() {
  const [myAccount, setMyAccount] = useState<AccountType | undefined>();
  const { web5 } = useWeb5Connect();
  const { getSingleAccount } = useAccount();

  useEffect(() => {
    if (web5) {
        console.log({web5})
      getRecords();
    }
  }, [web5]);

  const getRecords = async () => {
    const readResult = await getSingleAccount();
    setMyAccount(readResult);
  };

  return { myAccount };
}
