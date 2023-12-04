import React, { ReactNode } from "react";
import BottomNavBar from "./bottomNavBar";
import TopNavBar from "./topNavBar";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <TopNavBar /> */}
      <div className="bg-[#151628] text-white px-4 py-6 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] max-w-full overflow-y-auto w-full">
        {children}
      </div>
      <BottomNavBar />
    </div>
  );
}
