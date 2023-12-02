import React from "react";
import SidebarItem from "./sidebarItem";
import { sidebarItems } from "@/constants/sidebarItem.constants";
import { usePathname } from "next/navigation";

export default function SidebarItems() {
  const pathname = usePathname();

  return (
    <div className=" flex flex-col gap-y-2 px-3 py-4 items-center justify-center">
      {sidebarItems?.map((a) => (
        <SidebarItem
          key={a?.path}
          path={a?.path}
          isActive={pathname === a.path}
          text={a?.text}
        />
      ))}
    </div>
  );
}
