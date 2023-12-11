import { BookingStatusType } from "./bookingStatus.type";

export type BookingType = {
  id?: string;
  author: string;//hotel did
  recipient: string;//guest did
  status: BookingStatusType;
  checkIn: string;//date
  checkOut: string;//date
  roomId: string;
  roomCategoryName: string;
  roomNo: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
};
