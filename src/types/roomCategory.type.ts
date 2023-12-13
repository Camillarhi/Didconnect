export type RoomCategoryType = {
  id?: string;
  author: string;
  name: string;
  description: string;
  price?: number;
  status: "Active" | "Inactive";
  rooms?: number;
  floor?: number;
};

export const roomCategortTypesInitialValue: RoomCategoryType = {
  author: "",
  name: "",
  description: "",
  status: "Active",
};
