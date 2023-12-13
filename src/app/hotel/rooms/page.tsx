"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import AddRoomModal from "@/components/modals/addRoomModal";
import TableGroup from "@/components/table/tableGroup";
import { useDisclosure } from "@/hooks";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoom from "@/hooks/useRoom";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import { RoomType } from "@/types/room.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Rooms() {
  const { isOpen, close, open } = useDisclosure();
  const { web5 } = useWeb5Instance() || {};
  const { getAllRooms } = useRoom(web5);
  const { myHotel } = useGetUserAccount();
  const [rooms, setRooms] = useState<RoomType[]>();

  useEffect(() => {
    if (web5 && myHotel?.id) {
      getRecords();
    }
  }, [web5, myHotel, isOpen]);

  const getRecords = async () => {
    if (myHotel?.id) {
      const readResult = await getAllRooms(myHotel?.id);
      setRooms(readResult as RoomType[]);
    }
  };

  const roomColumn = [
    { column: "Room No.", key: "Room No." },
    { column: "Category", key: "Category" },
    { column: "Booking status", key: "Booking status" },
    { column: "Price", key: "Price" },
    { column: "FLOOR", key: "FLOOR" },
  ];

  const roomTableData = () => {
    if (!rooms) return [];

    return rooms?.map((room) => ({
      key: room?.id,
      "Room No.": room?.roomNumber,
      Category: room?.roomCategoryName,
      "Booking status": room.status,
      Price: `$${room?.price}/night`,
      FLOOR: room?.floorNumber,
    }));
  };

  return (
    <HotelLayout>
      <div className=" mb-[1.875rem] flex justify-between">
        <div>
          <p className="text-white md:text-[1.625rem] taxt-base font-medium leading-loose">
            All Rooms
          </p>
          <p className="text-zinc-300 text-xs font-normal leading-none">
            You have 2300 rooms
          </p>
        </div>

        <Button className=" w-[7.375rem]" onClick={() => open()}>
          Add room
        </Button>
      </div>

      <div className=" w-full border rounded-md h-full border-[#272849]">
        <div className="w-full h-[4.5rem] px-6 py-[1.125rem] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-8 justify-start items-start gap-0.5 flex">
            <div className=" px-2 py-1.5 bg-indigo-950 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-violet-300 text-xs font-medium leading-none">
                All rooms
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Booked
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Reserved
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Open
              </div>
            </div>
          </div>
          <div className="h-9 items-center gap-2 flex">
            <div className=" relative w-full">
              <Input placeHolder="Search" type="search" className="h-9 pl-9" />
              <div className=" ml-2 absolute inset-y-0 left-0 flex items-center">
                <Image
                  alt=""
                  src={"/assets/svgs/search.svg"}
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <div className=" border w-[8.125rem] h-full border-indigo-950">
              <select
                name=""
                id=""
                className=" bg-transparent w-full focus:outline-none text-sm"
              >
                <option value="" className=" bg-black">
                  Filter By
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
        </div>

        {/* table */}
        <div className=" w-full max-w-full h-[30.9375rem] max-h-[30.9375rem]">
          <TableGroup data={roomTableData()} columns={roomColumn} />
        </div>
      </div>
      <AddRoomModal close={close} isOpen={isOpen} />
    </HotelLayout>
  );
}
