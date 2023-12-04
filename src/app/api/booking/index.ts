import { DateSort } from "@/enums/dateSort.enum";
import { useWeb5Connect } from "@/hooks";
import { BookingType } from "@/types/booking.type";
import protocolDefinition from "../../protocol/protocol.json";

export default function useBooking() {
  const { web5 } = useWeb5Connect();

  const getSingleBooking = async (hotelId: string) => {
    let booking: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: hotelId,
        },
      },
    });

    booking = await record.data.json();
    return booking;
  };

  const getAllBookings = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5?.dwn?.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.booking.schema,
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

  const createBooking = async (bookingData: BookingType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: bookingData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: bookingData?.["@type"],
          schema: protocolDefinition.types.booking.schema,
          dataFormat: protocolDefinition.types.booking.dataFormats[0],
          recipient: bookingData?.recipient,
        },
      });

      const data = await record.data.json();
      const createdBooking = { record, data, id: record.id };

      const { status: sendStatus } = await record.send(bookingData?.recipient);

      if (sendStatus.code !== 202) {
        console.log("Unable to send to target did:" + sendStatus);
        return;
      } else {
        console.log("Shared list sent to recipient");
      }

      return createdBooking;
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
      await record.update({ data: bookingData });
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
