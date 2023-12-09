"use client";
import BookingDetails from "@/components/bookingDetails/bookingDetails";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import AccessModal from "@/components/modals/accessModal";
import PermittedUsers from "@/components/permittedUsers/permittedUsers";
import UnlockRoomButton from "@/components/unlockRoomButton/unlockRoomButton";
import { useDisclosure } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import RoomNav from "../roomNav/roomNav";
import Link from "next/link";
import CheckOutModal from "@/components/modals/checkOutModal";
import Input from "@/components/input/input";
import AlertBox from "@/components/alertBox/alertBox";

export default function ViewRoomDetails({
  params: { id },
}: {
  params: { id: any };
}) {
  const [activeTab, setActiveTab] = useState("Permissions");
  const {
    open: openCheckoutModal,
    isOpen: isCheckoutModalOpen,
    close: closeCheckoutModal,
  } = useDisclosure();
  const { open, isOpen, close } = useDisclosure();

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack text={`Room ${id}`} backgroundColor="bg-[#151628]" />

      <div className=" w-full mt-6 flex-col gap-y-6 justify-start items-start gap-6 inline-flex">
        <UnlockRoomButton id={id} />

        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="rounded-lg justify-center items-center inline-flex">
            <Image
              alt=""
              src={"/assets/images/hotel.png"}
              height={230.363}
              width={345.545}
              className=" rounded-md"
            />
          </div>
          <div className="w-full self-stretch h-fit flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-white text-base font-semibold leading-normal">
                Room 101
              </div>
              <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
              <div className="text-white text-base font-semibold leading-normal">
                Maestro
              </div>
            </div>
          </div>
        </div>
        <RoomNav activeText={activeTab} setActiveText={setActiveTab} />

        {activeTab === "Permissions" && (
          <>
            <PermittedUsers onClick={open} />
            <div className="w-full h-[8.125rem] px-4 pt-6 pb-4 bg-gray-900 flex-col justify-start items-center gap-2.5 flex">
              <Link
                href={`/customer/home/hotel/room/${id}/extend-access`}
                className="self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex"
              >
                <div className="text-center text-white text-sm font-medium capitalize leading-tight cursor-pointer">
                  Extend access to your room
                </div>
              </Link>

              <div
                className="self-stretch h-10 px-3 py-2.5 rounded-[6.25rem] flex-col justify-center items-center gap-2 flex cursor-pointer"
                onClick={() => openCheckoutModal()}
              >
                <div className="text-center text-red-300 text-sm font-medium capitalize leading-tight">
                  Check-out earlier
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Booking details" && <BookingDetails />}

        {activeTab === "Alerts" && (
          <div className=" w-full flex flex-col gap-4">
            <div className="h-9 items-center gap-2 flex w-full">
              <div className=" relative w-full">
                <Input
                  placeHolder="Search"
                  type="search"
                  className="h-9 pl-9"
                />
                <div className=" ml-2 absolute inset-y-0 left-0 flex items-center">
                  <Image
                    alt=""
                    src={"/assets/svgs/search.svg"}
                    height={20}
                    width={20}
                  />
                </div>
              </div>
              <div className=" border w-full h-full border-indigo-950">
                <select
                  name=""
                  id=""
                  className=" bg-transparent w-full focus:outline-none text-sm"
                >
                  <option value="" className=" bg-black">
                    Last 7 days
                  </option>
                  <option value="" className=" bg-black">
                    Last 5 days
                  </option>
                  <option value="" className=" bg-black">
                    Last 1 days
                  </option>
                  <option value="" className=" bg-black">
                    Last 10 days
                  </option>
                </select>
              </div>
            </div>
            <div className=" w-full">
              <div className="w-full h-[2.3125rem] bg-gray-900 shadow-inner justify-start items-start inline-flex">
                <div className="px-1 bg-white bg-opacity-0 flex-col justify-center items-center inline-flex">
                  <div className="px-2 pt-2 pb-1.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-sm font-normal leading-tight">
                      All
                    </div>
                  </div>
                  <div className="self-stretch h-[.1875rem] bg-violet-300 rounded-tl rounded-tr" />
                </div>
                <div className="px-1 flex-col justify-center items-center inline-flex">
                  <div className="px-2 pt-2 pb-1.5 justify-start items-start gap-2 inline-flex">
                    <div className="text-center text-zinc-300 text-sm font-normal leading-tight">
                      Security
                    </div>
                  </div>
                  <div className="self-stretch h-[.1875rem] rounded-tl rounded-tr" />
                </div>
                <div className="px-1 flex-col justify-center items-center inline-flex">
                  <div className="px-2 pt-2 pb-1.5 justify-start items-start gap-2 inline-flex">
                    <div className="text-center text-zinc-300 text-sm font-normal leading-tight">
                      Noise
                    </div>
                  </div>
                  <div className="self-stretch h-[.1875rem] rounded-tl rounded-tr" />
                </div>
              </div>
              <div>
                <AlertBox title="Guest check-out" status="bg-indigo-950" />
                <AlertBox
                  title="Attempted security breach"
                  status="bg-rose-600"
                />
                <AlertBox title="Guest check-out" status="bg-indigo-950" />
                <AlertBox title="Guest check-in" status="bg-indigo-950" />
                <AlertBox title="Guest check-in" status="bg-indigo-950" />
                <AlertBox title="Guest check-in" status="bg-indigo-950" />{" "}
                <AlertBox title="Guest check-out" status="bg-indigo-950" />
              </div>
            </div>

            <div className="w-full h-[8.125rem] px-4 pt-6 pb-4 bg-gray-900 flex-col justify-start items-center gap-2.5 flex">
              <Link
                href={`/customer/home/hotel/room/${id}/extend-access`}
                className="self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex"
              >
                <div className="text-center text-white text-sm font-medium capitalize leading-tight cursor-pointer">
                  Extend access to your room
                </div>
              </Link>

              <div
                className="self-stretch h-10 px-3 py-2.5 rounded-[6.25rem] flex-col justify-center items-center gap-2 flex cursor-pointer"
                onClick={() => openCheckoutModal()}
              >
                <div className="text-center text-red-300 text-sm font-medium capitalize leading-tight">
                  Check-out earlier
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <AccessModal isOpen={isOpen} close={close} />
      <CheckOutModal isOpen={isCheckoutModalOpen} close={closeCheckoutModal} />
    </div>
  );
}
