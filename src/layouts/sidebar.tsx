import SidebarItems from "@/components/SidebarItems/sidebarItems";
import Image from "next/image";

export default function Sidebar({
  isOpen,
  sidebarRef,
}: {
  isOpen: boolean;
  sidebarRef: any;
}) {
  return (
    <div
      ref={sidebarRef}
      className={`${
        isOpen ? "flex" : "hidden"
      } md:flex bg-[#10111F] w-[9.3125rem] pt-4 pb-[2.5rem] flex-col text-white z-[99999999] md:static absolute h-screen`}
    >
      <div className="w-[9.3125rem] h-[2.625rem] px-[1.375rem] justify-start items-center inline-flex">
        <Image alt="" src={"/assets/svgs/logo.svg"} height={400} width={500} />
      </div>

      <SidebarItems />
    </div>
  );
}
