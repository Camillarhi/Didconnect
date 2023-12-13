"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import StatusBadge from "@/components/statusBadge/statusBadge";
import TableGroup from "@/components/table/tableGroup";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoomCategory from "@/hooks/useRoomCategory";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import { BookingStatusType } from "@/types/bookingStatus.type";
import { RoomCategoryType } from "@/types/roomCategory.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const router = useRouter();
  const { web5 } = useWeb5Instance() || {};
  const { getAllRoomCategories } = useRoomCategory(web5);
  const { myHotel } = useGetUserAccount();
  const [categories, setCategories] = useState<RoomCategoryType[]>();

  useEffect(() => {
    if (web5 && myHotel?.id) {
      getRecords();
    }
  }, [web5, myHotel]);

  const getRecords = async () => {
    if (myHotel?.id) {
      const readResult = await getAllRoomCategories(myHotel?.id);
      setCategories(readResult as RoomCategoryType[]);
    }
  };

  const categoryColumn = [
    { column: "Room category", key: "Room category" },
    { column: "NO. OF ROOMS", key: "NO. OF ROOMS" },
    { column: "Status", key: "Status" },
    { column: "Booking status", key: "Booking status" },
    { column: "Price", key: "Price" },
    { column: "FLOOR", key: "FLOOR" },
  ];

  const categoryTableData = () => {
    if (!categories) return [];

    return categories?.map((category) => ({
      key: category?.id,
      "Room category": category?.name,
      "NO. OF ROOMS": category?.rooms,
      "Booking status": "50 rooms available",
      Status: <StatusBadge status={category?.status as BookingStatusType} />,
      Price: `$${category?.price}/night`,
      FLOOR: category?.floor,
    }));
  };

  return (
    <HotelLayout>
      <div className=" mb-[1.875rem] flex justify-between">
        <div>
          <p className="text-white md:text-[1.625rem] taxt-base font-medium leading-loose">
            All Room Categories
          </p>
          <p className="text-zinc-300 text-xs font-normal leading-none">
            You have 5 room categories stored
          </p>
        </div>

        <Button
          className=" w-[9.5625rem]"
          onClick={() => router.replace("/hotel/categories/add-category")}
        >
          Add category
        </Button>
      </div>

      <div className=" w-full border rounded-md h-full border-[#272849]">
        <div className="w-full h-[4.5rem] px-6 py-[1.125rem] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-8 justify-start items-start gap-0.5 flex">
            <div className=" px-2 py-1.5 bg-indigo-950 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-violet-300 text-xs font-medium leading-none">
                All categories
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Active
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Inactive
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
        </div>

        {/* table */}
        <div className=" w-full max-w-full h-[30.9375rem] max-h-[30.9375rem]">
          <TableGroup data={categoryTableData()} columns={categoryColumn} />
        </div>
      </div>
    </HotelLayout>
  );
}
