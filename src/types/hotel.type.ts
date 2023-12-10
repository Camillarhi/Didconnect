import { RoomType } from "./room.type";
import { RoomCategoryType } from "./roomCategory.type";

export type HotelType = {
  id?: string;
  author: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  location?: string;
  description: string;
  image?: any[];
  roomCategory?: RoomCategoryType[];
  room?: RoomType[];
  "@type": "hotel";
};

export const HotelTypeInitialValues = {
  author: "",
  businessName: "",
  phoneNumber: "",
  email: "",
  description: "",
  image: [],
};
