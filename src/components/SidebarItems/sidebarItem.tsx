import { SidebarItemProps } from "@/types/sidebarItem.type";
import Link from "next/link";

export default function SidebarItem({
  isActive,
  text,
  path,
}: SidebarItemProps) {
  return (
    <Link
      href={path}
      className={`w-[7.8125rem] h-9 pl-3 pr-4 py-1.5 ${
        isActive ? "bg-gray-900 rounded-[2.5625rem]" : ""
      } justify-start items-center gap-1 inline-flex`}
    >
      <div className="w-6 h-6 justify-center items-center gap-2.5 flex">
        <div
          className={`w-3 h-3 relative ${
            isActive ? "bg-[#C9B8FF]" : "bg-[#DBDCDE]"
          }  rounded-[1.1875rem]`}
        />
      </div>
      <div
        className={`${
          isActive ? "text-[#C9B8FF]" : "text-[#DBDCDE]"
        } text-xs font-medium capitalize leading-tight`}
      >
        {text}
      </div>
    </Link>
  );
}
