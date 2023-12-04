import { ReactElement } from "react";

export type BottomNavItemProps = {
  text: string;
  isActive?: boolean;
  image: ReactElement;
  path: string;
};
