"use client";

import AlertModal from "@/components/modals/alertModal";
import { useDisclosure } from "@/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const {
    open: openHotelAlertModal,
    isOpen: isHotelAlertModalOpen,
    close: closeHotelAlertModal,
  } = useDisclosure();
  const {
    open: openHotelGuestAlertModal,
    isOpen: isHotelGuestAlertModalOpen,
    close: closeHotelGuestAlertModal,
  } = useDisclosure();
  const [accountValue, setAccountValue] = useState<"hotel" | "guest">("guest");
  const [link, setLink] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./service-worker.js", { scope: "/" })
        .then(function (registration) {
          console.log("service worker registered", registration.scope);
        });
      navigator.serviceWorker.ready.then(function (registration) {
        console.log("service worker is ready", registration.scope);
      });
    }
  }, []);

  const proceedToNextPage = () => {
    if (link === "" || !link) {
      alert("please select an account type");
      return;
    }
    router.replace(link);
  };

  return (
    <div className="w-full h-[100vh] px-4 pt-6 pb-10 flex-col items-center inline-flex">
      <div className="justify-center md:pb-[1.875rem] items-center inline-flex md:border-b border-[#272849] w-full">
        <Image
          alt=""
          src={"/assets/svgs/logo.svg"}
          height={17.74}
          width={151.11}
        />
      </div>
      <div className=" md:rounded-lg md:border md:px-6 md:shadow-lg border-[#272849] md:mt-[3.5rem] md:h-[27.625rem] h-full justify-between flex flex-col">
        <div className="self-stretch h-[21.6088rem] flex-col justify-end items-center gap-10 flex">
          <div className="self-stretch h-72 flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-white text-xl font-semibold leading-7">
                Create Your Wallet
              </div>
              <div className="text-zinc-300 text-sm font-normal leading-tight">
                Choose the wallet type that best describes you
              </div>
            </div>
            <div className="self-stretch h-52 flex-col justify-center items-start gap-6 flex">
              <label
                onClick={() => {
                  setAccountValue(() => "guest");
                }}
                htmlFor="guest"
                className="self-stretch p-4 rounded border border-[#272849] justify-between items-start inline-flex"
              >
                <div className="grow shrink basis-0 h-[3.75rem] justify-start items-center gap-4 flex">
                  <div className="w-10 h-10 p-2 bg-[#191A2F] rounded-[2.5rem] justify-center items-center gap-2.5 flex">
                    <Image
                      alt=""
                      src={"/assets/svgs/profile-icon.svg"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-white text-base font-semibold leading-normal">
                      Hotel Guest
                    </div>
                    <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                      Register to book and secure your hotel rooms
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 relative">
                  <input
                    name="account-type"
                    defaultChecked
                    value={"guest"}
                    id="guest"
                    type="radio"
                    className="w-[1.125rem] h-[1.125rem] left-[.0625rem] top-[.0625rem] accent-[#C9B8FF] absolute focus:outline-none bg-transparent border-2 border-slate-600"
                  />
                </div>
              </label>
              <label
                onClick={() => {
                  setAccountValue(() => "hotel");
                }}
                htmlFor="hotel"
                className="self-stretch p-4 rounded border border-[#272849] justify-between items-start inline-flex"
              >
                <div className="grow shrink basis-0 h-[3.75rem] justify-start items-center gap-4 flex">
                  <div className="w-10 h-10 p-2 bg-[#191A2F] rounded-[2.5rem] justify-center items-center gap-2.5 flex">
                    <Image
                      alt=""
                      src={"/assets/svgs/hotel.svg"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-white text-base font-semibold leading-normal">
                      Hotel Owner
                    </div>
                    <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                      Create your admin account to give your customers a more
                      secure experience
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 relative">
                  <input
                    name="account-type"
                    value={"hotel"}
                    id="hotel"
                    type="radio"
                    className="w-[1.125rem] h-[1.125rem] left-[.0625rem] top-[.0625rem] accent-[#C9B8FF] absolute focus:outline-none bg-transparent border-2 border-slate-600"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[5.625rem] flex-col justify-start items-center gap-2.5 flex md:mt-10">
          <button
            type="button"
            onClick={() => {
              setLink(
                accountValue === "hotel"
                  ? "/hotel/register"
                  : "/customer/register"
              );
              accountValue === "hotel"
                ? openHotelAlertModal()
                : openHotelGuestAlertModal();
            }}
            className="self-stretch h-10 px-6 py-2.5 bg-primary rounded-full flex-col justify-center items-center gap-2.5 flex"
          >
            <div className="text-center text-white text-sm font-medium capitalize leading-tight">
              Create your wallet
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              setLink(
                accountValue === "guest" ? "/customer/login" : "/hotel/login"
              );
              accountValue === "hotel"
                ? openHotelAlertModal()
                : openHotelGuestAlertModal();
            }}
            className="self-stretch h-10 px-3 py-2.5 rounded-full flex-col justify-center items-center gap-2 flex"
          >
            <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
              I already have a wallet
            </div>
          </button>
        </div>
      </div>

      <AlertModal
        title="Please switch to Desktop"
        description="This app is more accessible on desktop devices for Hotel Owners. Kindly switch or proceed as a Hotel Guest"
        isOpen={isHotelAlertModalOpen}
        close={() => {
          closeHotelAlertModal();
          proceedToNextPage();
        }}
      />
      <AlertModal
        title="Please switch to Mobile"
        description="This app is more accessible on mobile devices for Hotel Guests. Kindly switch or proceed as a Hotel Owner"
        isOpen={isHotelGuestAlertModalOpen}
        close={() => {
          closeHotelGuestAlertModal();
          proceedToNextPage();
        }}
      />
    </div>
  );
}
