import { useEffect, useState } from "react";
import protocolDefinition from "../app/protocol/protocol.json";
import { webcrypto } from "node:crypto";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

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
    if (web5 && myDid) configureProtocol();
  }, [web5, myDid]);

  const configureProtocol = async () => {
    const { protocols: localProtocol, status: localProtocolStatus } =
      await queryForProtocol();
    console.log({ localProtocol, localProtocolStatus });
    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      const { protocol, status } = await installProtocolLocally();
      console.log("Protocol installed locally", protocol, status);

      const { status: configureRemoteStatus } = await protocol.send(myDid);
      console.log(
        "Did the protocol install on the remote DWN?",
        configureRemoteStatus
      );
    } else {
      console.log("Protocol already installed");
    }
  };

  const installProtocolLocally = async () => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const queryForProtocol = async () => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
        },
      },
    });
  };

  // const configureProtocol = async () => {
  //   const { protocols, status } = await web5.dwn.protocols.query({
  //     message: {
  //       filter: {
  //         protocol: protocolDefinition.protocol,
  //       },
  //     },
  //   });

  //   if (status.code !== 200) {
  //     alert("Error querying protocols");
  //     console.error("Error querying protocols", status);
  //     return;
  //   }

  //   // if the protocol already exists, we return
  //   if (protocols.length > 0) {
  //     console.log("Protocol already exists");
  //     return;
  //   }

  //   // configure protocol on local DWN
  //   const { status: configureStatus, protocol } =
  //     await web5.dwn.protocols.configure({
  //       message: {
  //         definition: protocolDefinition,
  //       },
  //     });

  //   console.log("Protocol configured", configureStatus, protocol);
  // };

  return { web5, myDid };
}
