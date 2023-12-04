import Image from "next/image";
import React from "react";

export default function TopNavBar() {
  return (
    <div className=" w-full h-[2.3125rem] bg-[#10111F] pl-5 pr-[1.1563rem] flex justify-between items-center">
      <div>9:41 </div>{" "}
      <div className=" flex gap-x-2">
        <Image
          alt=""
          src={"/assets/svgs/signal-icon.svg"}
          height={12}
          width={18}
        />
        <Image
          alt=""
          src={"/assets/svgs/wifi-icon.svg"}
          width={17}
          height={11.834}
        />
        <Image
          alt=""
          src={"/assets/svgs/battery-icon.svg"}
          height={13}
          width={27.401}
        />
      </div>
    </div>
  );
}
