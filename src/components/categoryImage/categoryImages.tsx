import Image from "next/image";
import React from "react";

export default function CategoryImages() {
  return (
    <div className="w-[6.8125rem] h-[5.5rem] rounded justify-center items-center flex">
      <Image
        alt=""
        src={"/assets/images/hotel.png"}
        height={90.4}
        width={120.54}
        className=" rounded-md"
      />
    </div>
  );
}
