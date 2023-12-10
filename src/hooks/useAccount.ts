import { DateSort } from "@/enums/dateSort.enum";
import { useWeb5Connect } from "@/hooks";
import { AccountType } from "@/types/account.type";
import protocolDefinition from "../app/protocol/protocol.json";

export default function useAccount() {
  const { web5 } = useWeb5Connect();

  const getSingleAccount = async () => {
    let account: any;
    const { record } = await web5.dwn.records.read({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
          protocolPath: "account",
        },
      },
    });

    account = await record.data.json();
    return account;
  };

  const createAccount = async (accountData: AccountType) => {
    try {
      const { record } = await web5.dwn.records.create({
        data: accountData,
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "account",
          schema: protocolDefinition.types.account.schema,
          dataFormat: protocolDefinition.types.account.dataFormats[0],
        },
      });

      const data = await record.data.json();
      const createdAccount = { record, data, id: record.id };

      return createdAccount;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return {
    getSingleAccount,
    createAccount,
  };
}
