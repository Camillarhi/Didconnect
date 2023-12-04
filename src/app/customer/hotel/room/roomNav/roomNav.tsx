import React from "react";

export default function RoomNav({
  activeText,
  setActiveText,
}: {
  activeText: string;
  setActiveText: (a: string) => void;
}) {
  const navigationValue = ["Permissions", "Alerts", "Booking details"];

  return (
    <div className="self-stretch rounded justify-start items-start gap-0.5 inline-flex">
      {navigationValue?.map((a) => (
        <div
          key={a}
          onClick={() => setActiveText(a)}
          className={`grow shrink basis-0 h-8 px-2 py-1.5 cursor-pointer ${
            activeText === a && "bg-indigo-950"
          } rounded justify-center items-center flex`}
        >
          <div
            className={`text-center ${
              activeText === a ? "text-violet-300" : "text-zinc-300"
            } text-xs font-medium leading-none`}
          >
            {a}
          </div>
        </div>
      ))}
    </div>
  );
}
