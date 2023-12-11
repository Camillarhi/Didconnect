"use client";
import Image from "next/image";
import InputGroup from "../input/inputGroup";
import ModalWrapper from "./modalWrapper/modalWrapper";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoomCategory from "@/hooks/useRoomCategory";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import { RoomCategoryType } from "@/types/roomCategory.type";
import { useState, useEffect } from "react";

export default function AddRoomModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
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

  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="w-[32.375rem] h-[19.25rem] px-4 pt-4 pb-6 bg-gray-900 rounded-lg flex-col justify-start items-start inline-flex">
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
              props={{}}
            />

            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex w-full">
              <div className="text-white text-sm font-normal leading-tight">
                Category
              </div>
              <div className=" border w-full h-9 border-indigo-950">
                <select
                  name=""
                  id=""
                  className=" bg-transparent w-full focus:outline-none text-sm"
                >
                  <option value="" className=" bg-black">
                    Select category
                  </option>
                  {categories &&
                    categories?.length > 0 &&
                    categories?.map((category) => (
                      <option value={category?.id} className=" bg-black">
                        {category?.name}{" "}
                      </option>
                    ))}
                </select>
              </div>
            </div>
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
            <div
              className=" px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer"
              onClick={close}
            >
              <div className="text-center text-white text-sm font-medium capitalize leading-tight">
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
