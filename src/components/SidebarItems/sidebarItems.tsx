import React from "react";
import SidebarItem from "./sidebarItem";

export default function SidebarItems() {
  return (
    <div className=" flex flex-col gap-y-2">
      <SidebarItem isActive={false} text="Home" />
      <SidebarItem isActive={true} text="Bookings" />
      <SidebarItem isActive={false} text="All Rooms" />
    </div>
  );
}
