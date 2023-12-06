import React from "react";

export default function Checkbox({ label }: { label: string }) {
  return (
    <div className="py-1 justify-start items-center gap-2 flex">
      <label className="cursor-pointer flex items-center">
        <input
          type="checkbox"
          className=" w-5 h-5 accent-[#151628] text-[#151628] cursor-pointer bg-transparent"
        />
        <span className=" text-white text-xs font-normal leading-none ml-2">
          {label}
        </span>
      </label>
    </div>
  );
}
