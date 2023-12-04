"use client";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import PermittedUsers from "@/components/permittedUsers/permittedUsers";
import UnlockRoomButton from "@/components/unlockRoomButton/unlockRoomButton";
import Image from "next/image";
import { useState } from "react";
import RoomNav from "../roomNav/roomNav";
import { useDisclosure } from "@/hooks";
import AccessModal from "@/components/modals/accessModal";

export default function UU({ params: { id } }: { params: { id: any } }) {
  const [activeTab, setActiveTab] = useState("Permissions");
  const { open, isOpen, close } = useDisclosure();

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack text={`Room ${id}`} />

      <div className=" mt-6 flex-col gap-y-6 justify-start items-start gap-6 inline-flex">
        <UnlockRoomButton />

        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className=" bg-white rounded-lg justify-center items-center inline-flex">
            <Image
              alt=""
              src={"/assets/images/hotel.png"}
              height={230.363}
              width={345.545}
              className=" rounded-md"
            />
          </div>
          <div className="self-stretch h-[4.25rem] flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-white text-base font-semibold leading-normal">
                Room 101
              </div>
              <div className="w-[.3125rem] h-[.3125rem] bg-gray-500 rounded-full" />
              <div className="text-white text-base font-semibold leading-normal">
                Maestro
              </div>
            </div>
            <div className="self-stretch pb-4 shadow-inner justify-between items-start inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-4 h-4 justify-center items-center flex">
                  <Image
                    alt=""
                    src={"/assets/svgs/locked.svg"}
                    height={16}
                    width={16}
                    className=" rounded-md"
                  />{" "}
                </div>
                <div className="text-white text-sm font-normal leading-tight">
                  Locked
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="w-5 h-5 justify-center items-center flex">
                  <Image
                    alt=""
                    src={"/assets/svgs/profile-grey.svg"}
                    height={18}
                    width={18}
                    className=" rounded-md"
                  />{" "}
                </div>
                <div className="text-white text-sm font-normal leading-tight">
                  Unoccupied
                </div>
              </div>
            </div>
          </div>
        </div>
        <RoomNav activeText={activeTab} setActiveText={setActiveTab} />

        {activeTab === "Permissions" && (
          <>
            {" "}
            <PermittedUsers onClick={open} />
            <div className="w-full h-[8.125rem] px-4 pt-6 pb-4 bg-gray-900 flex-col justify-start items-center gap-2.5 flex">
              <div className="self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                  Extend access to your room
                </div>
              </div>
              <div className="self-stretch h-10 px-3 py-2.5 rounded-[6.25rem] flex-col justify-center items-center gap-2 flex">
                <div className="text-center text-red-300 text-sm font-medium capitalize leading-tight">
                  Check-out earlier
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <AccessModal isOpen={isOpen} close={close} />
    </div>
  );
}
