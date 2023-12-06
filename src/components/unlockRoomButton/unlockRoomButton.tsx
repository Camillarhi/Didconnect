"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UnlockRoomButton({ id }: { id: string }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isClicked) router.push(`/customer/hotel/room/${id}/passkey`);
  }, [isClicked]);

  return (
    <div
      className={` ${
        isClicked && "justify-end"
      } h-10 bg-[#272849] rounded-full w-full flex items-center p-2 gap-x-2 cursor-pointer`}
    >
      {!isClicked ? (
        <>
          <div
            className=" bg-primary w-6 h-6 rounded-full"
            onClick={() => setIsClicked(() => true)}
          ></div>
          <div className="text-center text-zinc-300 text-sm font-normal leading-tight">
            Slide to unlock your door
          </div>
        </>
      ) : (
        <div className=" bg-primary w-6 h-6 rounded-full"></div>
      )}
    </div>
  );
}
