"use client";
import { useEffect, useState } from "react";

/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import StatisticsCards from "@/components/statisticsCard/statisticsCards";
import StatusBadge from "@/components/statusBadge/statusBadge";
import Image from "next/image";
import { webcrypto } from "node:crypto";
import TableGroup from "@/components/table/tableGroup";
import Button from "@/components/button/button";
import AlertBox from "@/components/alertBox/alertBox";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

export default function Home() {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);
  const [myRecords, setMyRecords] = useState<any>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./service-worker.js", { scope: "/" })
        .then(function (registration) {
          console.log("service worker registered", registration.scope);
        });
      navigator.serviceWorker.ready.then(function (registration) {
        console.log("service worker is ready", registration.scope);
      });
    }
  }, []);

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
  const data = [
    {
      key: 1,
      name: "Jane Smith",
      Status: <StatusBadge status="Active" />,
      Code: 98680,
      "Room No.": "Room 2",
      "Check-out date": "22/3/2023",
      "": (
        <Image
          alt=""
          src={"/assets/svgs/menu-icon.svg"}
          height={14}
          width={14}
          className=" cursor-pointer"
        />
      ),
    },
    {
      key: 2,
      name: "Jane Smith",
      Status: <StatusBadge status="Cancelled" />,
      Code: 98680,
      "Room No.": "Room 2",
      "Check-out date": "22/3/2023",
      "": (
        <Image
          alt=""
          src={"/assets/svgs/menu-icon.svg"}
          height={14}
          width={14}
          className=" cursor-pointer"
        />
      ),
    },
    {
      key: 3,
      name: "Jane Smith",
      Status: <StatusBadge status="Reserved" />,
      Code: 98680,
      "Room No.": "Room 2",
      "Check-out date": "22/3/2023",
      "": (
        <Image
          alt=""
          src={"/assets/svgs/menu-icon.svg"}
          height={14}
          width={14}
          className=" cursor-pointer"
        />
      ),
    },
    {
      key: 4,
      name: "Jane Smith",
      Status: <StatusBadge status="Checked-out" />,
      Code: 98680,
      "Room No.": "Room 2",
      "Check-out date": "22/3/2023",
      "": (
        <Image
          alt=""
          src={"/assets/svgs/menu-icon.svg"}
          height={14}
          width={14}
          className=" cursor-pointer"
        />
      ),
    },
  ];

  const columns = [
    { column: "Code", key: "Code" },
    { column: "name", key: "name" },
    { column: "Room No.", key: "Room No." },
    { column: "Status", key: "Status" },
    { column: "Check-out date", key: "Check-out date" },
    { column: "", key: "action" },
  ];

  return (
    <>
      <div className=" mb-[1.875rem] flex justify-between items-center">
        <p className=" font-medium text-[1.625rem] leading-loose">
          Here&apos;s a rundown of what&apos;s happening today
        </p>
        <Button className=" w-[9.5625rem]">Add New Guest</Button>
      </div>
      <div className=" flex gap-x-[1.875rem]">
        <div className=" w-[65%] gap-y-[1.875rem] flex flex-col">
          <StatisticsCards />
          <div className=" md:w-[49.375rem] md:max-w-[49.375rem] w-[85vw] max-w-[85vw] overflow-auto max-h-[calc(100vh-13.75rem)]">
            <TableGroup data={data} columns={columns} />
          </div>
        </div>

        <div className=" w-[35%] border border-[#272849] rounded-md">
          <div className=" flex justify-between items-center px-4 py-2 h-[3.5rem] border-b-4 border-[#272849]">
            <p className=" font-semibold">Alerts</p>
            <p className="text-violet-300 text-sm font-medium capitalize leading-tight">
              View Alerts
            </p>
          </div>

          <AlertBox title="Guest check-out" status="bg-indigo-950" />
          <AlertBox title="Attempted security breach" status="bg-rose-600" />
          <AlertBox title="Guest check-out" status="bg-indigo-950" />
          <AlertBox title="Guest check-in" status="bg-indigo-950" />
          <AlertBox title="Guest check-in" status="bg-indigo-950" />
          <AlertBox title="Guest check-in" status="bg-indigo-950" />
        </div>
      </div>
    </>
  );
}
