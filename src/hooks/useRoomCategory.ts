import { DateSort } from "@/enums/dateSort.enum";
import { useWeb5Connect } from "@/hooks";
import { RoomCategoryType } from "@/types/roomCategory.type";
import protocolDefinition from "../app/protocol/protocol.json";

export default function useRoomCategory() {
  const { web5 } = useWeb5Connect();

  const getSingleRoomCategory = async (hotelId: string) => {
    let roomCategory: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    roomCategory = await record.data.json();
    return roomCategory;
  };

  const getAllRoomCategories = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn?.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.roomcategory.schema,
          },
          dateSort: DateSort.CreatedAscending,
        },
      });

      console.log("Saved records", records);

      // add entry to sharedList
      if (records)
        for (let record of records) {
          const data = await record.data.json();
          const list = { record, data, id: record.id };
          sharedList.push(list);
        }
    }
    return sharedList;
  };

  const createRoomCategory = async (roomCategoryData: RoomCategoryType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: roomCategoryData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "roomcategory",
          schema: protocolDefinition.types.roomcategory.schema,
          dataFormat: protocolDefinition.types.roomcategory.dataFormats[0],
        },
      });

      const data = await record.data.json();
      const createdRoomCategory = { record, data, id: record.id };

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
      await record.update({ data: roomCategoryData });
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
