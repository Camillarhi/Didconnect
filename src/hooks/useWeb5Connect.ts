import { useEffect, useState } from "react";
import protocolDefinition from "../app/protocol/protocol.json";

export default function useWeb5Connect() {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);

  useEffect(() => {
    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import("@web5/api/browser");
      try {
        const { web5, did } = await Web5.connect({ sync: "5s" });

        setWeb5(web5);
        setMyDid(did);

        if (web5 && did) {
          console.log("Web5 initialized");
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  }, []);

  useEffect(() => {
    if (web5) configureProtocol();
  }, [web5]);

  const configureProtocol = async () => {
    const { protocols, status } = await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
        },
      },
    });

    if (status.code !== 200) {
      alert("Error querying protocols");
      console.error("Error querying protocols", status);
      return;
    }

    // if the protocol already exists, we return
    if (protocols.length > 0) {
      console.log("Protocol already exists");
      return;
    }

    // configure protocol on local DWN
    const { status: configureStatus, protocol } =
      await web5.dwn.protocols.configure({
        message: {
          definition: protocolDefinition,
        },
      });

    console.log("Protocol configured", configureStatus, protocol);
  };

  return { web5, myDid };
}
