import { RoomAccessType } from "./roomAccess.type";
import { RoomStatusType } from "./roomStatus.type";

export type RoomType = {
  id?: string;
  roomCategoryId?: string;
  creatorDid: string;
  roomNumber: number | string;
  floorNumber: number | string;
  status: RoomStatusType;
  author: string;
  price: number;
  permittedUsers?: RoomAccessType[];
};
