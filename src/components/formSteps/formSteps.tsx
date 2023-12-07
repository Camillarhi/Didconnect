import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  completed: boolean;
  current: boolean;
};

type FormStepsProps = { steps: Props[] };

export default function FormSteps({ steps }: FormStepsProps) {
  return (
    <div className=" flex w-full">
      {steps?.map((step, index) => (
        <div className="flex flex-col items-center gap-y-2 w-full">
          <div className="flex items-center w-full">
            <div
              className={`${
                step.current || step.completed ? "bg-primary " : "bg-[#272849]"
              } h-[.125rem] w-[45%] md:w-[50%]`}
            ></div>
            {!step.completed ? (
              <div
                className={` w-7 h-7 ${
                  step.current ? "bg-primary " : "bg-[#272849] text-[#67687E]"
                } flex justify-center items-center rounded-full text-xs`}
              >
                {index + 1}
              </div>
            ) : (
              <div className=" w-7 h-7  flex justify-center items-center rounded-full">
                <Image
                  alt=""
                  src={"/assets/svgs/round-check.svg"}
                  height={24}
                  width={24}
                  className=" bg-primary rounded-full"
                />
              </div>
            )}
            <div
              className={`${
                step.completed ? "bg-primary " : "bg-[#272849]"
              } h-[.125rem] w-[45%] md:w-[50%]`}
            ></div>
          </div>
          <p
            className={`${
              !step.completed && !step.current ? "text-[#67687E]" : ""
            } text-[.625rem] leading-none`}
          >
            {step.name}
          </p>
        </div>
      ))}
    </div>
  );
}
