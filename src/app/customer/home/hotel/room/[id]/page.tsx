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
      </div>
      <AccessModal isOpen={isOpen} close={close} />
      <CheckOutModal isOpen={isCheckoutModalOpen} close={closeCheckoutModal} />
    </div>
  );
}