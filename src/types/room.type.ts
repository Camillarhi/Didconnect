import { RoomAccessType } from "./roomAccess.type";
import { RoomStatusType } from "./roomStatus.type";

export type RoomType = {
  id?: string;
  roomCategoryId: string;
  roomCategoryName?: string;
  guestDid?: string;
  roomNumber: number | string;
  floorNumber?: number | string;
  status: RoomStatusType;
  author: string;
  price?: number;
  permittedUsers?: RoomAccessType[];
  bookingRecordId?: string;
};

export const RoomTypeInitialValue: RoomType = {
  roomCategoryId: "",
  roomNumber: "",
  status: "Open",
  author: "",
  roomCategoryName: "",
};
