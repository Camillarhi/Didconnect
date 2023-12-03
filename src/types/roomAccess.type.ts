import { RoomAccessStatusType } from "./roomAccessStatus.type";

export type RoomAccessType = {
  roomId: string;
  hotelId: string;
  author: string;
  recipient: string;
  purpose: string;
  fromDate: string;
  toDate: string;
  hashKey?: string;
  status: RoomAccessStatusType;
};
