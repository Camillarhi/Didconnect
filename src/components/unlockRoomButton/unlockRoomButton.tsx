import React from "react";

export default function UnlockRoomButton() {
  return (
    <div className=" h-10 bg-[#272849] rounded-full w-full flex items-center p-2 gap-x-2">
      <div className=" bg-primary w-6 h-6 rounded-full"></div>
      <div className="text-center text-zinc-300 text-sm font-normal leading-tight">
        Slide to unlock your door
      </div>
    </div>
  );
}
