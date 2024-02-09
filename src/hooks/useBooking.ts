import { DateSort } from "@/enums/dateSort.enum";
import { BookingType } from "@/types/booking.type";
import protocolDefinition from "../app/protocol/protocol.json";
import { useRouter } from "next/navigation";
import useWeb5Instance from "./useWeb5Instance";

export default function useBooking(web5: any) {
  const router = useRouter();
  const { myDid } = useWeb5Instance() || {};

  const getSingleBooking = async (hotelId: string) => {
    let booking: any;
    const { records } = await web5.dwn.records.query({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });
    console.log("booking data", { records });

    booking = await records?.data.json();
    console.log("booking data", { booking });
    return booking;
  };

  const getAllBookings = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn.records.query({
        from: myDid,
        // from: "did:ion:EiDfvazNkNm1VFGjgGz05_gtVpYtjJBezOlkJIlu88EJ6w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiZ2JyRFdTUS13Q2czVjNEWmdGTWRVWmxoc3RrXzBQdWtIZGJwNkM5dVFoMCJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItSlpJYUlFdlh3bjY5V0pYejBnNnNCYTE0VnNIa1pVX1dsWnVNamx6cTRJIiwieSI6IjhWX2N5ZlhyMnZTc0MtNFFpeUtHWGp0Q1d2WHhId0xqS2gzckJvRDlVRjQifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMiIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBbkFkYVVDc3lhNG1ubkpBQ2tkTEJCdmtIQzFaUVh4czNBbDBnTkhEVHVmQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQkgyTS1UTDBTQnpwakJMWGRZdkFWTXNuQjQ5OG1rWV9wNzhaRnNzMEF4elEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUE2VVF1X0xBazhCOEZWMml1WUtKMVZlMGdKTFBZUVlibm9VLXVyM2ZxZUdnIn19",
        message: {
          filter: {
            protocol: protocolDefinition.protocol,
            protocolPath: "booking",
            schema: protocolDefinition.types.booking.schema,
          },
          dateSort: DateSort.CreatedAscending,
        },
      });

      const { records2 } = await web5.dwn.records.query({
        from: "did:ion:EiDfvazNkNm1VFGjgGz05_gtVpYtjJBezOlkJIlu88EJ6w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiZ2JyRFdTUS13Q2czVjNEWmdGTWRVWmxoc3RrXzBQdWtIZGJwNkM5dVFoMCJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItSlpJYUlFdlh3bjY5V0pYejBnNnNCYTE0VnNIa1pVX1dsWnVNamx6cTRJIiwieSI6IjhWX2N5ZlhyMnZTc0MtNFFpeUtHWGp0Q1d2WHhId0xqS2gzckJvRDlVRjQifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMiIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBbkFkYVVDc3lhNG1ubkpBQ2tkTEJCdmtIQzFaUVh4czNBbDBnTkhEVHVmQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQkgyTS1UTDBTQnpwakJMWGRZdkFWTXNuQjQ5OG1rWV9wNzhaRnNzMEF4elEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUE2VVF1X0xBazhCOEZWMml1WUtKMVZlMGdKTFBZUVlibm9VLXVyM2ZxZUdnIn19",
        message: {
          filter: {
            protocol: protocolDefinition.protocol,
            // protocolPath: "booking",
            schema: protocolDefinition.types.booking.schema,
          },
          dateSort: DateSort.CreatedAscending,
        },
      });

      console.log("bookings", { records }, { records2 });

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

  const createBooking = async (bookingData: BookingType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: bookingData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "booking",
          schema: protocolDefinition.types.booking.schema,
          dataFormat: protocolDefinition.types.booking.dataFormats[0],
          recipient: bookingData?.recipient,
          published: true,
        },
      });
      if (record) {
        const data = await record?.data.json();
        const createdBooking = { record, data, id: record?.id };

        const { status: sendStatus } = await record.send(
          bookingData?.recipient
        );

        if (sendStatus.code !== 202) {
          console.log("Unable to send to target did:" + sendStatus);
          return;
        } else {
          console.log("Shared list sent to recipient");
        }

        router.replace("/hotel/bookings");

        return createdBooking;
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const editBookingData = async (bookingData: BookingType) => {
    try {
      // Get record in DWN
      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: bookingData.id,
          },
        },
      });

      // Update the record in DWN
      await record?.update({ data: bookingData });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const deleteBookingData = async (bookingData: BookingType) => {
    try {
      // Get record in DWN
      let response = await web5.dwn.records.delete({
        message: {
          recordId: bookingData?.id,
        },
      });
      console.log(
        `deleted ${bookingData?.roomNo}. status: ${response.status.code}`
      );
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleBooking,
    editBookingData,
    getAllBookings,
    createBooking,
    deleteBookingData,
  };
}
