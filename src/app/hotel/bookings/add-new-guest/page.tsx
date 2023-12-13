"use client";
import Input from "@/components/input/input";
import InputGroup from "@/components/input/inputGroup";
import useBooking from "@/hooks/useBooking";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoom from "@/hooks/useRoom";
import useRoomCategory from "@/hooks/useRoomCategory";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import { BookingType, BookingTypeInitialValue } from "@/types/booking.type";
import { RoomType } from "@/types/room.type";
import { RoomCategoryType } from "@/types/roomCategory.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddNewGuest() {
  const router = useRouter();
  const { web5, myDid } = useWeb5Instance() || {};
  const { getAllRoomCategories } = useRoomCategory(web5);
  const { myHotel } = useGetUserAccount();
  const [categories, setCategories] = useState<RoomCategoryType[]>();
  const [selectedCategory, setSelectedCategory] = useState<RoomCategoryType>();
  const [selectedRoom, setSelectedRoom] = useState<RoomType>();
  const [rooms, setRooms] = useState<RoomType[]>();
  const { getAllRooms } = useRoom(web5);
  const [formStep, setFormStep] = useState<number>(1);
  const { createBooking } = useBooking(web5);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingType>({
    mode: "all",
    defaultValues: BookingTypeInitialValue,
  });

  useEffect(() => {
    if (web5 && myHotel?.id) {
      getRecords();
    }
  }, [web5, myHotel]);

  const getRecords = async () => {
    if (myHotel?.id) {
      const readResult = await getAllRoomCategories(myHotel?.id);
      setCategories(readResult as RoomCategoryType[]);

      const readRoomResult = await getAllRooms(myHotel?.id);
      setRooms(readRoomResult as RoomType[]);
    }
  };

  const selectCategory = (id: string) => {
    const category = categories?.find((a) => a?.id === id);

    if (category) setSelectedCategory(category);
  };

  const selectRoom = (id: string) => {
    const room = rooms?.find((a) => a?.id === id);

    if (room) setSelectedRoom(room);
  };

  console.log({myDid})

  const submit = async (data: BookingType) => {
    data.author = myDid;
    data.status = "Pending";
    data.roomId = selectedRoom?.id!;
    data.roomCategoryName = selectedCategory?.name!;
    data.roomCategoryId = selectedCategory?.id!;
    data.roomNo = selectedRoom?.roomNumber!;

    console.log({ data }, { selectedRoom }, { selectedCategory });

    await createBooking(data);
  };

  return (
    <HotelLayout>
      <div className=" w-full flex justify-center items-center">
        <div className=" w-[38.75rem] h-full">
          <div className="w-full h-12 flex-col justify-start items-start gap-[1.875rem] inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/back.svg"}
                  height={24}
                  width={24}
                  className=" cursor-pointer"
                />
              </div>
              <div className="text-white text-base font-semibold leading-normal">
                Add New Guest
              </div>
            </div>

<p>{myDid}</p>
            {formStep === 1 && (
              <>
                <div className=" w-[38.3125rem] h-fit px-6 pt-6 pb-8 flex flex-col gap-6 border border-[#272849] rounded-md">
                  <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-center text-white text-xs font-medium uppercase leading-none">
                      Connect with guest
                    </div>
                    <div className="text-center text-zinc-300 text-xs font-normal leading-tight">
                      Connect with guest with their DID
                    </div>
                  </div>

                  <InputGroup
                    label="Enter customer's DID"
                    type="text"
                    className="h-9 "
                    placeHolder="enter DID"
                    props={{
                      ...register("recipient", {
                        required: "*Please enter guest's DID",
                      }),
                    }}
                  />
                  {errors.recipient?.message && (
                    <p className=" text-[red] text-sm">
                      {errors.recipient?.message}
                    </p>
                  )}
                  <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                    Scan QR Code instead
                  </div>
                </div>

                <div className="w-full h-10 justify-between items-start inline-flex">
                  <button
                    type="button"
                    onClick={() => router.replace("/hotel/bookings")}
                    className="px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center text-center text-violet-300 text-sm font-medium capitalize leading-tight items-center gap-2 inline-flex"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="px-6 py-2.5 bg-violet-800 rounded-full text-center text-white text-sm font-medium capitalize leading-tight flex-col justify-center items-center gap-2.5 inline-flex"
                  >
                    Start booking
                  </button>
                </div>
              </>
            )}
            {formStep === 2 && (
              <>
                <div className=" w-[38.3125rem] h-fit px-6 pt-6 pb-8 flex flex-col gap-6 border border-[#272849] rounded-md">
                  <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-center text-white text-xs font-medium uppercase leading-none">
                      Booking details
                    </div>
                    <div className="text-center text-zinc-300 text-xs font-normal leading-tight">
                      Please fill in the booking details
                    </div>
                  </div>

                  <div className=" flex flex-col gap-4">
                    <div className=" flex w-full justify-between gap-4">
                      <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                        <div className="text-white text-sm font-normal leading-tight">
                          Check-in date
                        </div>
                        <Input
                          type="date"
                          className="h-9 "
                          {...register("checkInDate", {
                            required: "*Please enter check in date",
                          })}
                        />
                      </div>
                      <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                        <div className="text-white text-sm font-normal leading-tight">
                          Check-out date
                        </div>
                        <Input
                          type="date"
                          className="h-9 "
                          {...register("checkOutDate", {
                            required: "*Please enter check out date",
                          })}
                        />
                      </div>
                    </div>
                    {errors.checkInDate?.message && (
                      <p className=" text-[red] text-sm">
                        {errors.checkInDate?.message}
                      </p>
                    )}
                    {errors.checkOutDate?.message && (
                      <p className=" text-[red] text-sm">
                        {errors.checkOutDate?.message}
                      </p>
                    )}
                    <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                      <div className="text-white text-sm font-normal leading-tight">
                        Room category
                      </div>
                      <div className=" border w-full h-9 border-indigo-950">
                        <select
                          className=" bg-transparent w-full focus:outline-none text-sm"
                          {...register("roomCategoryId", {
                            onChange: (e) => selectCategory(e?.target?.value),
                            required: "*Please select a category",
                          })}
                        >
                          <option value="" className=" bg-black">
                            Select category
                          </option>
                          {categories &&
                            categories?.length > 0 &&
                            categories?.map((category) => {
                              if (category.status === "Active")
                                return (
                                  <option
                                    value={category?.id}
                                    className=" bg-black"
                                  >
                                    {category?.name}
                                  </option>
                                );
                            })}
                        </select>
                      </div>
                    </div>
                    {errors.roomCategoryId?.message && (
                      <p className=" text-[red] text-sm">
                        {errors.roomCategoryId?.message}
                      </p>
                    )}
                    <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
                      <div className="text-white text-sm font-normal leading-tight">
                        Room number
                      </div>
                      <div className=" border w-full h-9 border-indigo-950">
                        <select
                          className=" bg-transparent w-full focus:outline-none text-sm"
                          {...register("roomId", {
                            onChange: (e) => selectRoom(e?.target?.value),
                            required: "*Please select a room number",
                          })}
                        >
                          <option value="" className=" bg-black">
                            Select room
                          </option>
                          {rooms &&
                            rooms?.length > 0 &&
                            rooms?.map((room) => {
                              if (
                                room.status === "Open" &&
                                room.roomCategoryId === selectedCategory?.id
                              )
                                return (
                                  <option
                                    value={room?.id}
                                    className=" bg-black"
                                  >
                                    {room?.roomNumber}
                                  </option>
                                );
                            })}
                        </select>
                      </div>
                    </div>
                    {errors.roomId?.message && (
                      <p className=" text-[red] text-sm">
                        {errors.roomId?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full h-10 justify-between items-start inline-flex">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center text-center text-violet-300 text-sm font-medium capitalize leading-tight items-center gap-2 inline-flex"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit(submit)}
                    className="px-6 py-2.5 bg-violet-800 rounded-full text-center text-white text-sm font-medium capitalize leading-tight flex-col justify-center items-center gap-2.5 inline-flex"
                  >
                    Share with customer
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
