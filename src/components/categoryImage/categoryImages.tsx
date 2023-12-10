import Image from "next/image";
import React from "react";

export default function CategoryImages({ src }: { src?: string }) {
  return (
    <div className="w-[6.8125rem] h-[5.5rem] rounded justify-center items-center flex">
      <Image
        alt=""
        src={src ?? "/assets/images/hotel.png"}
        height={90.4}
        width={120.54}
        className=" rounded-md"
      />
    </div>
  );
}
