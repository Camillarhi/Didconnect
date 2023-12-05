import { BottomNavItemProps } from "@/types/bottomNavItem.type";
import Image from "next/image";

export const bottomNavItems: BottomNavItemProps[] = [
  {
    text: "Home",
    image: (
      <Image alt="" src={"/assets/svgs/home-icon.svg"} height={12} width={18} />
    ),
    path: "/customer/home",
  },
  {
    text: "Explore",
    image: (
      <Image
        alt=""
        src={"/assets/svgs/explore-icon.svg"}
        height={16}
        width={16}
      />
    ),
    path: "/customer/explore",
  },
  {
    text: "History",
    image: (
      <Image alt="" src={"/assets/svgs/history-icon.svg"} height={16} width={16} />
    ),
    path: "/customer/history",
  },
  {
    text: "Profile",
    image: (
      <Image alt="" src={"/assets/svgs/profile-icon.svg"} height={16} width={16} />
    ),
    path: "/customer/profile",
  },
];
