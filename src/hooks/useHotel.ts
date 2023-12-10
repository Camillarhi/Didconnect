import { DateSort } from "@/enums/dateSort.enum";
import { HotelType } from "@/types/hotel.type";
import protocolDefinition from "../app/protocol/protocol.json";
import { useRouter } from "next/navigation";

export default function useHotel(web5: any) {
  const router = useRouter();

  const getSingleHotel = async (hotelId: string) => {
    let hotel: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    hotel = await record?.data.json();
    return hotel;
  };

  const getAllHotels = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn?.records.query({
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
          const data = await record?.data.json();
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
          protocolPath: "hotel",
          schema: protocolDefinition.types.hotel.schema,
          dataFormat: protocolDefinition.types.hotel.dataFormats[0],
          published: true,
        },
      });

      const data = await record?.data.json();
      const createdHotel = { record, data, id: record.id };
      router.replace("/hotel");

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
        `deleted ${hotelData?.businessName}. status: ${response.status.code}`
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
