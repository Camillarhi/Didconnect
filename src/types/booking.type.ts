import { BookingStatusType } from "./bookingStatus.type";

export type BookingType = {
  id?: string;
  author: string;
  recipient: string;
  status: BookingStatusType;
  checkIn: string;
  checkOut: string;
  roomId: string;
  roomCategoryName: string;
  roomNo: string;
};
