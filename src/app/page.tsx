"use client";
import { useState, useEffect } from "react";

/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from "node:crypto";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

export default function Home() {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);
  const [myRecords, setMyRecords] = useState<any>(null);

  useEffect(() => {
    if (web5) getRecords();
  }, [web5]);

  useEffect(() => {
    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import("@web5/api/browser");

      try {
        const { web5, did } = await Web5.connect({ sync: "5s" });
        setWeb5(web5);
        setMyDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log("Web5 initialized");
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  }, []);

  const getRecords = async () => {
    const { record } = await web5.dwn.records.create({
      data: { name: "Jane Doe", age: 30 },
      message: {
        dataFormat: "application/json",
      },
    });
    const readResult = await record.data.text();
    setMyRecords(readResult);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-[600px] w-[600px] overflow-auto grid gap-20">
        <h1>Web5: {myDid}</h1>
        <h1>My name: {JSON.parse(myRecords)?.name}</h1>
        <h1>My age: {JSON.parse(myRecords)?.age}</h1>
      </div>
    </main>
  );
}
