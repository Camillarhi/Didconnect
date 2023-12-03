import { useWeb5Connect } from "@/hooks";
import { HotelType } from "@/types/hotel.type";
import protocolDefinition from "../../protocol/protocol.json";
import { DateSort } from "@/enums/dateSort.enum";

export default function useHotel() {
  const { web5 } = useWeb5Connect();

  const getSingleHotel = async (hotelId: string) => {
    let hotel: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    hotel = await record.data.json();
    return hotel;
  };

  const getAllHotels = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5?.dwn?.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.hotel.schema,
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

  const createHotel = async (hotelData: HotelType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: hotelData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: hotelData?.["@type"],
          schema: protocolDefinition.types.hotel.schema,
          dataFormat: protocolDefinition.types.hotel.dataFormats[0],
          published: true,
        },
      });

      const data = await record.data.json();
      const createdHotel = { record, data, id: record.id };

      return createdHotel;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const editHotelData = async (hotelData: HotelType) => {
    try {
      // Get record in DWN
      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: hotelData.id,
          },
        },
      });

      // Update the record in DWN
      await record.update({ data: hotelData });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const deleteHotelData = async (hotelData: HotelType) => {
    try {
      // Get record in DWN
      let response = await web5.dwn.records.delete({
        message: {
          recordId: hotelData?.id,
        },
      });
      console.log(
        `deleted ${hotelData?.name}. status: ${response.status.code}`
      );
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleHotel,
    editHotelData,
    getAllHotels,
    createHotel,
    deleteHotelData,
  };
}
