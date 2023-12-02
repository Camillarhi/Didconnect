import React from "react";

export type SidebarItemProps = {
  isActive: boolean;
  text: string;
};

export default function SidebarItem({ isActive, text }: SidebarItemProps) {
  return (
    <div
      className={`w-[125px] h-9 pl-3 pr-4 py-1.5 ${
        isActive ? "bg-gray-900 rounded-[41px]" : ""
      } justify-start items-center gap-1 inline-flex`}
    >
      <div className="w-6 h-6 justify-center items-center gap-2.5 flex">
        <div
          className={`w-3 h-3 relative ${
            isActive ? "bg-[#C9B8FF]" : "bg-[#DBDCDE]"
          }  rounded-[19px]`}
        />
      </div>
      <div
        className={`${
          isActive ? "text-[#C9B8FF]" : "text-[#DBDCDE]"
        } text-xs font-medium font-['Inter'] capitalize leading-tight`}
      >
        {text}
      </div>
    </div>
  );
}
