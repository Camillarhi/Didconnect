"use client";
import InputGroup from "@/components/input/inputGroup";
import Passcode from "@/components/passcode/passcode";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";
import {
  CustomerType,
  CustomerTypeInitialFormValues,
} from "@/types/customer.type";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterGuest() {
  const [formSteps, setFormSteps] = useState<number>(2);
  const [password, setPassword] = useState<string>("");
  const {
    register,
    unregister,
    getValues,
    setValue,
    handleSubmit,
    resetField,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<CustomerType>({
    mode: "all",
    defaultValues: CustomerTypeInitialFormValues,
  });

  const submit = (data: CustomerType) => {
    console.log({ data });
  };

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-[100vh] max-h-full max-w-full overflow-y-auto w-full flex flex-col">
      {formSteps === 1 && (
        <Passcode
          next={() => setFormSteps(2)}
          password={password}
          setPassword={setPassword}
        />
      )}
      {formSteps === 2 && (
        <>
          <RegisterTabGuide
            title="Set Up Your Profile"
            description="You have exclusive ownership of your data, and you alone have the right to decide when and how to share it"
          />

          <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex mt-6">
            <InputGroup
              label="Name"
              type="text"
              className="h-9 "
              placeHolder="Jordan Peters"
              props={{
                ...register("name", {
                  required: "*Please enter your name",
                }),
              }}
            />
            {errors.name?.message && (
              <p className=" text-[red] text-sm">{errors.name?.message}</p>
            )}
            <InputGroup
              label="Email address"
              type="email"
              className="h-9 "
              placeHolder="Jordan@Peters.com"
              props={{
                ...register("email", {
                  required: "*Please enter your email",
                }),
              }}
            />
            {errors.email?.message && (
              <p className=" text-[red] text-sm">{errors.email?.message}</p>
            )}
            <InputGroup
              label="Phone number"
              type="number"
              className="h-9 "
              placeHolder="+234947993"
              props={{
                ...register("contactNumber", {
                  required: "*Please enter your phone number",
                }),
              }}
            />
            {errors.contactNumber?.message && (
              <p className=" text-[red] text-sm">
                {errors.contactNumber?.message}
              </p>
            )}
          </div>
          <div
            className=" mt-3 self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex cursor-pointer"
            onClick={handleSubmit(submit)}
          >
            <div className="text-center text-white text-sm font-medium capitalize leading-tight">
              Finish
            </div>
          </div>
        </>
      )}
    </div>
  );
}
