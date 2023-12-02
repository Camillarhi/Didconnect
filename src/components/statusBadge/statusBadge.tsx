import { StatusEnum } from "@/enums/status.enum";
import { StatusType } from "@/types/status.type";
import React from "react";

export default function StatusBadge({ status }: { status: StatusType }) {
  const backgroudColor = () => {
    switch (status) {
      case StatusEnum.Active:
        return " bg-[#0A3224]";
      case StatusEnum.Cancelled:
        return " bg-[#320A1B]";
      case StatusEnum.CheckedOut:
        return " bg-[#393A4D]";
      case StatusEnum.Reserved:
        return " bg-[#32290A]";
    }

    return "";
  };

  const textColor = () => {
    switch (status) {
      case StatusEnum.Active:
        return " text-[#2CFF73]";
      case StatusEnum.Cancelled:
        return " text-[#FF879D]";
      case StatusEnum.CheckedOut:
        return " text-[#F2F2F299]";
      case StatusEnum.Reserved:
        return " text-[#FFC839]";
    }

    return "";
  };

  return (
    <div
      className={`${backgroudColor()} h-7 px-3 py-1.5 rounded-[1.9375rem] justify-center items-center gap-2.5 inline-flex`}
    >
      <div className={` ${textColor()} text-xs font-normal leading-none`}>
        {status}
      </div>
    </div>
  );
}
