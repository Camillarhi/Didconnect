import SidebarItems from "@/components/SidebarItems/sidebarItems";

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
      } md:flex bg-black w-[15.1875rem] pr-[1.4375rem] md:pt-[2.8125rem] pt-[2.5125rem] pb-[4rem] flex-col text-white z-[99999999] md:static absolute h-screen`}
    >
        {isOpen?'open':'close'}
      <SidebarItems />
    </div>
  );
}
