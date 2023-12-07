"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MobileGoBack({
  text,
  backgroundColor,
  rightText,
  rightTextClick,
}: {
  text: string;
  backgroundColor: string;
  rightText?: string;
  rightTextClick?: () => void;
}) {
  const router = useRouter();

  return (
    <div
      className={`w-full h-10 px-4 py-2 justify-between items-center inline-flex fixed top-0 ${backgroundColor} border-[#272849] border-b-2`}
    >
      <div
        className="w-6 h-6 justify-center items-center flex"
        onClick={() => router.back()}
      >
        <Image
          alt=""
          src={"/assets/svgs/back.svg"}
          height={24}
          width={24}
          className=" cursor-pointer"
        />
      </div>
      <div className="text-white text-xs font-normal leading-none">{text}</div>
      <div>
        {rightText && (
          <p
            className=" text-[#C9B8FF] text-xs font-medium mr-4 cursor-pointer"
            onClick={rightTextClick}
          >
            {rightText}
          </p>
        )}
      </div>
    </div>
  );
}
