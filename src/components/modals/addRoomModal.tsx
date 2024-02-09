"use client";
import Image from "next/image";
import InputGroup from "../input/inputGroup";
import ModalWrapper from "./modalWrapper/modalWrapper";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoomCategory from "@/hooks/useRoomCategory";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import { RoomCategoryType } from "@/types/roomCategory.type";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RoomType, RoomTypeInitialValue } from "@/types/room.type";
import useRoom from "@/hooks/useRoom";

export default function AddRoomModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const { web5, myDid } = useWeb5Instance() || {};
  const { getAllRoomCategories } = useRoomCategory(web5);
  const { createRoom } = useRoom(web5);
  const { myHotel } = useGetUserAccount();
  const [categories, setCategories] = useState<RoomCategoryType[]>();
  const [selectedCategory, setSelectedCategory] = useState<RoomCategoryType>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RoomType>({
    mode: "all",
    defaultValues: RoomTypeInitialValue,
  });

  useEffect(() => {
    if (web5 && myHotel?.id) {
      getRecords();
    }
  }, [web5, myHotel]);

  const getRecords = async () => {
    if (myHotel?.id) {
      const readResult = await getAllRoomCategories(myHotel?.id);
      console.log({readResult})
      setCategories(readResult as RoomCategoryType[]);
    }
  };

  const submit = async (data: RoomType) => {
    data.floorNumber = selectedCategory?.floor;
    data.author = myDid;
    data.price = selectedCategory?.price;
    data.roomCategoryName = selectedCategory?.name;

    console.log({ data }, { selectedCategory });
    if (myHotel?.id) {
      await createRoom(data, close, myHotel.id);
      reset();
    }
  };

  const selectCategory = (id: string) => {
    const category = categories?.find((a) => a?.id === id);

    if (category) setSelectedCategory(category);
  };
console.log({categories})
  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[32.375rem] h-fit px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-start inline-flex">
        <div className="self-stretch pb-4 shadow-inner justify-between items-center inline-flex border-b border-[#272849]">
          <div className="text-white text-sm font-medium capitalize leading-tight">
            Add new room
          </div>
          <Image
            alt=""
            src={"/assets/svgs/close.svg"}
            height={24}
            width={24}
            className=" rounded-md cursor-pointer"
            onClick={close}
          />
        </div>

        <div className=" w-full mt-6">
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            <InputGroup
              label="Room number"
              type="number"
              className="h-9 "
              placeHolder="101"
              props={{
                ...register("roomNumber", {
                  required: "*Please enter room number",
                }),
              }}
            />
            {errors.roomNumber?.message && (
              <p className=" text-[red] text-sm">
                {errors.roomNumber?.message}
              </p>
            )}
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
              <div className="text-white text-sm font-normal leading-tight">
                Category
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
                          <option value={category?.id} className=" bg-black">
                            {category?.name}{" "}
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
          </div>

          <div className="w-full h-10 justify-end items-start gap-4 inline-flex mt-5">
            <div
              className=" px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              onClick={close}
            >
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Cancel
              </div>
            </div>
            <button
              type="button"
              className=" px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
              onClick={handleSubmit(submit)}
            >
              <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                Save
              </div>
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
