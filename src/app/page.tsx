"use client";
import { useState, useEffect } from "react";
import { Web5 } from "@web5/api";

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
    connect();
  }, []);

  useEffect(() => {
    if (web5) getRecords();
  }, [web5]);

  const connect = async () => {
    const { web5, did } = await Web5.connect();
    setWeb5(web5);
    setMyDid(did);
  };

  const getRecords = async () => {
    const { record } = await web5.dwn.records.create({
      data: { name: "Hello, Web5!", age: 30 },
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
