import { DateSort } from "@/enums/dateSort.enum";
import { RoomCategoryType } from "@/types/roomCategory.type";
import protocolDefinition from "../app/protocol/protocol.json";
import { useRouter } from "next/navigation";

export default function useRoomCategory(web5: any) {
  const router = useRouter();

  const getSingleRoomCategory = async (
    hotelId: string
  ): Promise<RoomCategoryType | undefined> => {
    let roomCategory: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    roomCategory = await record?.data.json();
    return roomCategory;
  };

  const getAllRoomCategories = async (parentId: string) => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn?.records.query({
        message: {
          filter: {
            parentId: parentId,
            schema: protocolDefinition.types.roomcategory.schema,
          },
          dateSort: DateSort.CreatedAscending,
        },
      });

      console.log("Saved records", records);

      // add entry to sharedList
      if (records)
        for (let record of records) {
          const data = await record?.data.json();
          const list = { ...data, id: record?.id };
          sharedList.push(list);
        }
    }
    return sharedList;
  };

  const createRoomCategory = async (
    roomCategoryData: RoomCategoryType,
    parentId: string
  ) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: roomCategoryData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "hotel/roomcategory",
          schema: protocolDefinition.types.roomcategory.schema,
          dataFormat: protocolDefinition.types.roomcategory.dataFormats[0],
          parentId: parentId,
          contextId: parentId,
        },
      });

      const data = await record?.data.json();
      const createdRoomCategory = { record, data, id: record?.id };
      router.replace("/hotel/categories");

      return createdRoomCategory;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const editRoomCategoryData = async (roomCategoryData: RoomCategoryType) => {
    try {
      // Get record in DWN
      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: roomCategoryData.id,
          },
        },
      });

      // Update the record in DWN
      await record?.update({ data: roomCategoryData });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const deleteRoomCategoryData = async (roomCategoryData: RoomCategoryType) => {
    try {
      // Get record in DWN
      let response = await web5.dwn.records.delete({
        message: {
          recordId: roomCategoryData?.id,
        },
      });
      console.log(
        `deleted ${roomCategoryData?.name}. status: ${response.status.code}`
      );
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleRoomCategory,
    editRoomCategoryData,
    getAllRoomCategories,
    createRoomCategory,
    deleteRoomCategoryData,
  };
}
