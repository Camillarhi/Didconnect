import React from "react";

export default function RegisterTabGuide({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full h-fit flex-col justify-start items-start gap-2 inline-flex">
      <div className="text-center text-white text-xl font-semibold leading-7">
        {title}
      </div>
      <div className="self-stretch text-[#DBDCDE] text-sm font-normal leading-tight">
        {description}
      </div>
    </div>
  );
}
