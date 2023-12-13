import { BookingStatusType } from "./bookingStatus.type";

export type BookingType = {
  id?: string;
  author: string; //hotel did
  recipient: string; //guest did
  status: BookingStatusType;
  checkInDate: string;
  checkOutDate: string;
  roomId: string;
  roomCategoryName: string;
  roomCategoryId: string;
  roomNo: number|string;
  name?: string;
  email?: string;
  phoneNumber?: string;
};

export const BookingTypeInitialValue: BookingType = {
  author: "",
  recipient: "",
  status: "Pending",
  checkInDate: "",
  checkOutDate: "",
  roomId: "",
  roomCategoryName: "",
  roomNo: "",
  roomCategoryId: "",
};
