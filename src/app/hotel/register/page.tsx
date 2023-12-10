"use client";
import CategoryImages from "@/components/categoryImage/categoryImages";
import FileUpload from "@/components/fileUpload/fileUpload";
import InputGroup from "@/components/input/inputGroup";
import Passcode from "@/components/passcode/passcode";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";
import useAccount from "@/hooks/useAccount";
import useGetUserAccount from "@/hooks/useGetUserAccount";
import useHashValue from "@/hooks/useHashValue";
import useHotel from "@/hooks/useHotel";
import useWeb5Instance from "@/hooks/useWeb5Instance";
import { AccountType } from "@/types/account.type";
import { HotelType, HotelTypeInitialValues } from "@/types/hotel.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterHotel() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<HotelType>({
    mode: "all",
    defaultValues: HotelTypeInitialValues,
  });

  const [formSteps, setFormSteps] = useState<number>(1);
  const [password, setPassword] = useState<string>("");
  const [hashpassword, setHashPassword] = useState<string>("");
  const { hashString } = useHashValue();
  const { myDid, web5 } = useWeb5Instance() || {};
  const { createHotel } = useHotel(web5);
  const { createAccount } = useAccount(web5);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [imageBlobs, setImageBlobs] = useState<Blob[]>([]);
  const { myAccount } = useGetUserAccount();
  const router = useRouter();

  useEffect(() => {
    if (formSteps === 2) {
      hashString(password).then((hash) => {
        setHashPassword(hash);
      });
    }
  }, [formSteps]);

  useEffect(() => {
    if (myAccount?.accountType === "guest") {
      router.replace("/customer/login");
      return;
    }
    if (myAccount?.accountType === "hotelOwner") {
      router.replace("/hotel/login");
      return;
    }
  }, [myAccount]);

  const handleFilesSelect = (files: FileList | null) => {
    setSelectedFiles(files);
    if (files) {
      const blobs: Blob[] = Array.from(files).map(
        (file) => new Blob([file], { type: file.type })
      );
      setImageBlobs(blobs);
    }
  };

  const removeFile = (index: number) => {
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      filesArray.splice(index, 1);

      // Convert the array of File objects back to a new FileList
      const updatedFileList = new DataTransfer();
      filesArray.forEach((file) => {
        updatedFileList.items.add(file);
      });

      setSelectedFiles(updatedFileList.files);
    }
  };

  const submit = async (data: HotelType) => {
    const account: AccountType = {
      passkey: hashpassword,
      accountType: "hotelOwner",
      "@type": "account",
    };

    data.author = myDid;
    data.image = imageBlobs;

    await createAccount(account);
    await createHotel(data);
  };

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <div className="justify-center md:pb-[1.875rem] items-center hidden md:inline-flex md:border-b border-[#272849] w-full">
        <Image
          alt=""
          src={"/assets/svgs/logo.svg"}
          height={17.74}
          width={151.11}
        />
      </div>

      {formSteps === 1 && (
        <Passcode
          next={() => setFormSteps(2)}
          password={password}
          setPassword={setPassword}
        />
      )}

      {formSteps === 2 && (
        <div className="md:flex md:justify-center md:items-center w-full md:mt-[3.5rem] md:flex-col">
          <div className=" md:w-[38.75rem] md:h-fit md:border border-[#272849] md:shadow md:rounded-lg md:pt-6 md:pb-8 md:px-6">
            <RegisterTabGuide
              title="Set Up Your Profile"
              description="You have exclusive ownership of your data, and you alone have the right to decide when and how to share it"
            />
            <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex mt-6">
              <InputGroup
                label="Business Name"
                type="text"
                className="h-9 "
                placeHolder="business name"
                props={{
                  ...register("businessName", {
                    required: "*Please enter your business name",
                  }),
                }}
              />
              {errors.businessName?.message && (
                <p className=" text-[red] text-sm">
                  {errors.businessName?.message}
                </p>
              )}
              <InputGroup
                label="Business email address"
                type="email"
                className="h-9 "
                placeHolder="email"
                props={{
                  ...register("email", {
                    required: "*Please enter your business email address",
                  }),
                }}
              />
              {errors.email?.message && (
                <p className=" text-[red] text-sm">{errors.email?.message}</p>
              )}
              <InputGroup
                label="Phone number"
                type="text"
                className="h-9 "
                placeHolder="+234947993"
                props={{
                  ...register("phoneNumber", {
                    required:
                      "*Please enter your business contact phone number",
                  }),
                }}
              />
              {errors.phoneNumber?.message && (
                <p className=" text-[red] text-sm">
                  {errors.phoneNumber?.message}
                </p>
              )}
            </div>
          </div>
          <div className=" mt-8 flex md:w-[38.75rem] justify-end">
            <button
              type="button"
              disabled={!isValid}
              className={`px-6 py-2.5 ${
                isValid ? "bg-primary" : "bg-[#272849]"
              } rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer text-center text-white text-sm font-medium capitalize leading-tight`}
              onClick={() => setFormSteps(3)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {formSteps === 3 && (
        <div className="md:flex md:justify-center md:items-center w-full md:mt-[3.5rem] md:flex-col">
          <div className="md:w-[27rem] md:h-fit px-4 pt-4 pb-6 md:rounded-lg md:shadow md:border border-[#272849] md:flex-col justify-start items-center gap-6 md:inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-white text-xs font-semibold uppercase leading-none">
                Media
              </div>
              <div className="self-stretch text-zinc-300 text-xs font-normal leading-none">
                Upload a maximum of 5 pictures to give your guests a visual
                preview of the inviting atmosphere your hotel has to offer
              </div>
            </div>
            <div className="self-stretch h-[22.875rem] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-fit pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-2 flex border-b border-[#272849]">
                <div className="justify-start items-start gap-2 inline-flex w-full flex-wrap">
                  {selectedFiles &&
                    Array.from(selectedFiles).map((file, index) => (
                      <div className=" relative">
                        <Image
                          alt=""
                          src={"/assets/svgs/close.svg"}
                          height={24}
                          width={24}
                          className=" rounded-md absolute z-40 top-0 right-0"
                          onClick={() => removeFile(index)}
                        />

                        <CategoryImages
                          key={index}
                          src={URL.createObjectURL(file)}
                        />
                      </div>
                    ))}
                </div>
                <FileUpload onFilesSelect={handleFilesSelect} />
              </div>
              <div className="self-stretch h-[7.375rem] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-sm font-normal leading-tight">
                  Description
                </div>
                <textarea
                  placeholder="Enter a detailed description"
                  className="self-stretch grow shrink basis-0 px-3 py-2 focus:outline-none bg-gray-900 rounded border border-slate-600 flex-col justify-start items-start gap-2.5 flex"
                  {...register("description", {
                    required: "*Please enter a description",
                  })}
                ></textarea>
              </div>
              {errors.description?.message && (
                <p className=" text-[red] text-sm">
                  {errors.description?.message}
                </p>
              )}
              {/* <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
                <div className="text-white text-sm font-normal leading-tight">
                  Facilities
                </div>
                <div className="self-stretch pl-3 pr-2 py-2 bg-gray-900 rounded border border-slate-600 justify-start items-center gap-2 inline-flex">
                  <select
                    name=""
                    id=""
                    className=" bg-transparent w-full focus:outline-none text-sm"
                  >
                    <option value="" className=" bg-black">
                      Select facilities available at your hotel
                    </option>
                    <option value="" className=" bg-black">
                      wifi
                    </option>
                    <option value="" className=" bg-black">
                      smart
                    </option>
                    <option value="" className=" bg-black">
                      break fast
                    </option>
                  </select>
                </div>
              </div> */}
            </div>
          </div>

          <div className="md:w-[27rem] h-10 items-start gap-2.5 flex mt-8 justify-end">
            <div
              className="px-6 py-2.5 rounded-full border border-violet-300 flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              onClick={() => setFormSteps(2)}
            >
              <div className="text-center text-violet-300 text-sm font-medium capitalize leading-tight">
                Back
              </div>
            </div>
            <button
              type="button"
              disabled={!isValid}
              onClick={handleSubmit(submit)}
              className={`px-6 py-2.5  ${
                isValid ? "bg-primary" : "bg-[#272849]"
              } rounded-full flex-col text-center text-white text-sm font-medium capitalize leading-tight justify-center items-center gap-2.5 inline-flex cursor-pointer`}
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
