import { RoomType } from "./room.type";
import { RoomCategoryType } from "./roomCategory.type";

export type HotelType = {
  id?: string;
  author: string;
  name: string;
  location: string;
  description: string;
  image?: any;
  roomCategory?: RoomCategoryType[];
  room?: RoomType[];
};
