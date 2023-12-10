import { DateSort } from "@/enums/dateSort.enum";
import { RoomType } from "@/types/room.type";
import protocolDefinition from "../app/protocol/protocol.json";

export default function useRoom(web5: any) {
  const getSingleRoom = async (hotelId: string) => {
    let room: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    room = await record?.data.json();
    return room;
  };

  const getAllRooms = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn?.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.room.schema,
          },
          dateSort: DateSort.CreatedAscending,
        },
      });

      console.log("Saved records", records);

      // add entry to sharedList
      if (records)
        for (let record of records) {
          const data = await record?.data.json();
          const list = { record, data, id: record.id };
          sharedList.push(list);
        }
    }
    return sharedList;
  };

  const createRoom = async (roomData: RoomType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: roomData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "room",
          schema: protocolDefinition.types.room.schema,
          dataFormat: protocolDefinition.types.room.dataFormats[0],
        },
      });

      const data = await record?.data.json();
      const createdRoom = { record, data, id: record.id };

      return createdRoom;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const editRoomData = async (roomData: RoomType) => {
    try {
      // Get record in DWN
      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: roomData.id,
          },
        },
      });

      // Update the record in DWN
      await record.update({ data: roomData });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const deleteRoomData = async (roomData: RoomType) => {
    try {
      // Get record in DWN
      let response = await web5.dwn.records.delete({
        message: {
          recordId: roomData?.id,
        },
      });
      console.log(
        `deleted ${roomData?.roomNumber}. status: ${response.status.code}`
      );
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleRoom,
    editRoomData,
    getAllRooms,
    createRoom,
    deleteRoomData,
  };
}
