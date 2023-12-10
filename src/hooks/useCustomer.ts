import { DateSort } from "@/enums/dateSort.enum";
import { useWeb5Connect } from "@/hooks";
import { CustomerType } from "@/types/customer.type";
import protocolDefinition from "../app/protocol/protocol.json";

export default function useCustomer() {
  const { web5 } = useWeb5Connect();

  const getSingleCustomer = async (customerId: string) => {
    let customer: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: customerId,
        },
      },
    });

    customer = await record.data.json();
    return customer;
  };

  const getCustomerForLoggedInUser = async () => {
    let customer: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
          protocolPath: "customer",
        },
      },
    });

    customer = await record.data.json();
    return customer;
  };

  const getAllCustomers = async () => {
    let sharedList = [];
    if (web5) {
      const { records } = await web5.dwn?.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.customer.schema,
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

  const createCustomer = async (customerData: CustomerType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: customerData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: customerData?.["@type"],
          schema: protocolDefinition.types.customer.schema,
          dataFormat: protocolDefinition.types.customer.dataFormats[0],
        },
      });

      const data = await record.data.json();
      const createdCustomer = { record, data, id: record.id };

      return createdCustomer;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const editCustomerData = async (customerData: CustomerType) => {
    try {
      // Get record in DWN
      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: customerData.id,
          },
        },
      });

      // Update the record in DWN
      await record.update({ data: customerData });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const deleteCustomerData = async (customerData: CustomerType) => {
    try {
      // Get record in DWN
      let response = await web5.dwn.records.delete({
        message: {
          recordId: customerData?.id,
        },
      });
      console.log(
        `deleted ${customerData?.name}. status: ${response.status.code}`
      );
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleCustomer,
    editCustomerData,
    getAllCustomers,
    createCustomer,
    deleteCustomerData,
    getCustomerForLoggedInUser,
  };
}
