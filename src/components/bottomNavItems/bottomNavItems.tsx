"use client";
import { bottomNavItems } from "@/constants/bottomBarItems.constants";
import BottomNavItem from "./bottomNavItem";
import { usePathname } from "next/navigation";

export default function BottomNavItems() {
  const pathname = usePathname();

  return (
    <div className=" flex justify-between gap-1">
      {bottomNavItems?.map((a) => (
        <BottomNavItem
          key={a.path}
          text={a.text}
          image={a?.image}
          isActive={pathname === a.path}
          path={a.path}
        />
      ))}
    </div>
  );
}
