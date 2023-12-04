import BottomNavItems from "@/components/bottomNavItems/bottomNavItems";

export default function BottomNavBar() {
  return (
    <div className=" h-[5.5rem] bg-[#10111F] px-4 flex justify-center items-center fixed bottom-0 w-full">
      <BottomNavItems />
    </div>
  );
}
