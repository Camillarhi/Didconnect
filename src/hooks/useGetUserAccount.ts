"use client";
import { AccountType } from "@/types/account.type";
import { useEffect, useState } from "react";
import useAccount from "./useAccount";
import useWeb5Instance from "./useWeb5Instance";
import { HotelType } from "@/types/hotel.type";
import { CustomerType } from "@/types/customer.type";
import useCustomer from "./useCustomer";
import useHotel from "./useHotel";

export default function useGetUserAccount() {
  const [myAccount, setMyAccount] = useState<AccountType | undefined>();
  const [myHotel, setMyHotel] = useState<HotelType | undefined>();
  const [guestProfile, setGuestProfile] = useState<CustomerType | undefined>();
  const { myDid, web5 } = useWeb5Instance() || {};
  const { getSingleAccount } = useAccount(web5);
  const { getLoggedInUserHotel } = useHotel(web5);
  const { getCustomerForLoggedInUser } = useCustomer(web5);

  useEffect(() => {
    if (web5) {
      getRecords();
    }
  }, [web5]);

  const getRecords = async () => {
    const readResult = await getSingleAccount();
    setMyAccount(readResult);

    const readHotelResult = await getLoggedInUserHotel();
    setMyHotel(readHotelResult);

    const readResultGuest = await getCustomerForLoggedInUser();
    setGuestProfile(readResultGuest);
  };

  return { myAccount, myHotel, guestProfile };
}
