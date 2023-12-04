import { BottomNavItemProps } from "@/types/bottomNavItem.type";
import Link from "next/link";

export default function BottomNavItem({
  text,
  isActive,
  image,
  path,
}: BottomNavItemProps) {
  return (
    <Link
      href={path}
      className={`flex items-center flex-col w-20 h-12 ${
        isActive && "bg-[#191A2F]"
      } rounded-full p-2 text-[.625rem]`}
    >
      {image}
      {text}
    </Link>
  );
}
