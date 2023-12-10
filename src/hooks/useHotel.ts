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
        // from: "did:ion:EiCDnxRqK9hW_5BlGm9iClrNlJS8R9l6g8THwlI4LUZZ1g:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiWExVaFF5MF9rMHE2QUNhendOVU1mV28wNTBZVFluMjE0b2QzenI1UV9VYyJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJqdE9Cb1U0Uloxc1ZUZU9VR0hZY25EZnlVRjRlRVZaaWt0bXNrZV84TG9NIiwieSI6IlgzajZJc00xdlBuNDcwcjlheW5UMElMdWk0cnF6NklFcE1mY0NNYVlEcGsifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlCTVR0ZlNWOUZTUERrNDllT1FSSm9ZZDFZTXhRbTdKU2lzVXZvbzhDbDNxZyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQXBSRVhpQWFGdGV5OWRsZTVlQ0ZxZFJvci1jVEtfTk9xS2tOMlcxM2xNclEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUMxUFJzaXQtQkxQcXRCQlNWUnRYMHRhVUdGVEkxMllpWlZteUNZTWlxOGlBIn19",
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
