import Image from "next/image";
import React from "react";

export default function MobileGoBack({ text }: { text: string }) {
  return (
    <div className="w-full h-10 px-4 py-2 justify-between items-center inline-flex">
      <div className="w-6 h-6 justify-center items-center flex">
        <Image alt="" src={"/assets/svgs/back.svg"} height={24} width={24} />
      </div>
      <div className="text-white text-xs font-normal leading-none">{text}</div>
      <div className="w-6 h-6 opacity-0 justify-center items-center flex">
        <div className="w-6 h-6 relative"></div>
      </div>
    </div>
  );
}
