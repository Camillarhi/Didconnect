"use client";
import InputGroup from "@/components/input/inputGroup";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useRoomCategory from "@/hooks/useRoomCategory";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import HotelLayout from "@/layouts/hotel/hotelLayout";
import {
  RoomCategoryType,
  roomCategortTypesInitialValue,
} from "@/types/roomCategory.type";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function AddCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RoomCategoryType>({
    mode: "all",
    defaultValues: roomCategortTypesInitialValue,
  });
  const { web5, myDid } = useWeb5Instance() || {};
  const { createRoomCategory } = useRoomCategory(web5);
  const { myHotel, guestProfile } = useGetUserAccount();

  console.log({ myHotel }, { guestProfile });

  const submit = async (data: RoomCategoryType) => {
    data.author = myDid;
    console.log(data);
    if (myHotel?.id) {await createRoomCategory(data, myHotel?.id); }
  };

  return (
    <HotelLayout>
      <div className="self-stretch h-[40.125rem] px-[1.875rem] pt-6 pb-8 flex-col justify-start items-center gap-[1.875rem] flex">
        <div className="w-full justify-start items-center gap-2 inline-flex">
          <div className="w-6 h-6 justify-center items-center flex">
            <Image
              alt=""
              src={"/assets/svgs/back.svg"}
              height={24}
              width={24}
              className=" cursor-pointer"
            />{" "}
          </div>
          <div className="text-white text-base font-semibold leading-normal">
            Add Category
          </div>
        </div>
        <div className="justify-center items-start gap-[1.875rem] inline-flex">
          <div className="w-[38.75rem] px-4 pt-4 pb-6 rounded-lg shadow border border-indigo-950 flex-col justify-start items-center gap-4 inline-flex">
            <InputGroup
              label="Name"
              type="text"
              className="h-9 "
              placeHolder="Pantheon"
              props={{
                ...register("name", {
                  required: "*Please enter category name",
                }),
              }}
            />{" "}
            {errors.name?.message && (
              <p className=" text-[red] text-sm">{errors.name?.message}</p>
            )}
            <div className="self-stretch h-[7.375rem] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-white text-sm font-normal leading-tight">
                Description
              </div>
              <textarea
                placeholder="Enter a description"
                className="self-stretch grow shrink basis-0 px-3 py-2 focus:outline-none bg-gray-900 rounded border border-slate-600 flex-col justify-start items-start gap-2.5 flex"
                {...register("description", {
                  required: "*Please enter category description",
                })}
              ></textarea>
            </div>
            {errors.description?.message && (
              <p className=" text-[red] text-sm">
                {errors.description?.message}
              </p>
            )}
            <InputGroup
              label="Floor"
              type="number"
              className="h-9 "
              placeHolder="2"
              props={{
                ...register("floor", {
                  required: "*Please enter floor",
                }),
              }}
            />
            {errors.floor?.message && (
              <p className=" text-[red] text-sm">{errors.floor?.message}</p>
            )}
            <InputGroup
              label="Rooms"
              type="number"
              className="h-9 "
              placeHolder="2"
              props={{
                ...register("rooms", {
                  required: "*Please enter category rooms quantity",
                }),
              }}
            />{" "}
            {errors.rooms?.message && (
              <p className=" text-[red] text-sm">{errors.rooms?.message}</p>
            )}
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="text-white text-sm font-normal leading-tight">
                Status
              </div>
              <div className="self-stretch pl-3 pr-2 py-2 bg-gray-900 rounded border border-slate-600 justify-start items-center gap-2 inline-flex">
                <select
                  className=" bg-transparent w-full focus:outline-none text-sm"
                  {...register("status", {
                    required: "*Please select a status",
                  })}
                >
                  <option value="Active" className=" bg-black">
                    Active
                  </option>
                  <option value="Inactive" className=" bg-black">
                    Inactive
                  </option>
                </select>
              </div>
            </div>
            {errors.status?.message && (
              <p className=" text-[red] text-sm">{errors.status?.message}</p>
            )}
            <InputGroup
              label="Price"
              type="number"
              className="h-9 "
              placeHolder="0.00"
              props={{
                ...register("price", {
                  required: "*Please enter price",
                }),
              }}
            />
            {errors.price?.message && (
              <p className=" text-[red] text-sm">{errors.price?.message}</p>
            )}
          </div>
          {/* <div className="w-[432px] px-4 pt-4 pb-6 rounded-lg shadow border border-indigo-950 flex-col justify-start items-center gap-10 inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-white text-xs font-semibold uppercase leading-none">
                Media
              </div>
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                Upload a maximum of 3 pictures to give your guests a visual
                preview of what to expect in this category
              </div>
            </div>
            <div className="self-stretch h-[120px] p-8 bg-gray-900 rounded-lg border border-slate-600 flex-col justify-center items-center gap-2 flex">
              <FileUpload onFilesSelect={() => console.log} />
            </div>
          </div> */}
        </div>
        <div className="w-full justify-end items-start gap-2.5 inline-flex">
          <div className="px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
              Cancel
            </div>
          </div>
          <button
            onClick={handleSubmit(submit)}
            type="button"
            disabled={!isValid}
            className={`${
              isValid ? "bg-primary" : "bg-[#272849]"
            }  px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 inline-flex text-center text-white text-sm font-medium capitalize leading-tight`}
          >
            Save
          </button>
        </div>
      </div>
    </HotelLayout>
  );
}
