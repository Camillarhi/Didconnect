"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import StatusBadge from "@/components/statusBadge/statusBadge";
import TableGroup from "@/components/table/tableGroup";
import useBooking from "@/hooks/useBooking";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import { BookingType } from "@/types/booking.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Bookings() {
  const router = useRouter();
  const { web5 } = useWeb5Instance() || {};
  const { getAllBookings } = useBooking(web5);
  const [bookings, setBookings] = useState<BookingType[]>();

  useEffect(() => {
    if (web5) {
      getRecords();
    }
  }, [web5]);

  const getRecords = async () => {
    const readResult = await getAllBookings();
    setBookings(readResult as BookingType[]);
  };

  console.log({ bookings });

  const bookingColumn = [
    { column: "Guest", key: "Guest" },
    { column: "Room No.", key: "Room No." },
    { column: "Room category", key: "Room category" },
    { column: "Status", key: "Status" },
    { column: "Check-in date", key: "Check-in date" },
    { column: "Check-out date", key: "Check-out date" },
  ];

  const bookingTableData = () => {
    if (!bookings) return [];

    return bookings?.map((booking) => ({
      key: booking?.id,
      "Room No.": booking?.roomNo,
      "Room category": booking?.roomCategoryName,
      Guest: booking?.name,
      Status: <StatusBadge status={booking.status} />,
      "Check-in date": booking.checkInDate,
      "Check-out date": booking?.checkOutDate,
    }));
  };

  return (
    <HotelLayout>
      <div className=" mb-[1.875rem] flex justify-between">
        <div>
          <p className="text-white md:text-[1.625rem] taxt-base font-medium leading-loose">
            Bookings list
          </p>
          <p className="text-zinc-300 text-xs font-normal leading-none">
            You have 2300 bookings
          </p>
        </div>

        <Button
          className=" w-[9.5625rem]"
          onClick={() => router.replace("/hotel/bookings/add-new-guest")}
        >
          Add New Guest
        </Button>
      </div>

      <div className=" w-full border rounded-md h-full border-[#272849]">
        <div className="w-full h-[4.5rem] px-6 py-[1.125rem] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-8 justify-start items-start gap-0.5 flex">
            <div className=" px-2 py-1.5 bg-indigo-950 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-violet-300 text-xs font-medium leading-none">
                All bookings
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Active
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Checked-out
              </div>
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded justify-start items-center flex cursor-pointer">
              <div className="text-center text-zinc-300 text-xs font-medium leading-none">
                Reserved
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
          <TableGroup data={bookingTableData()} columns={bookingColumn} />
        </div>
      </div>
    </HotelLayout>
  );
}
