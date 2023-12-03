"use client";
import { useEffect } from "react";

/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import Alerts from "@/components/alerts/alerts";
import Button from "@/components/button/button";
import StatisticsCards from "@/components/statisticsCard/statisticsCards";
import StatusBadge from "@/components/statusBadge/statusBadge";
import TableGroup from "@/components/table/tableGroup";
import Image from "next/image";
import { webcrypto } from "node:crypto";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

export default function Home() {
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
        <p className=" font-medium md:text-[1.625rem] text-base leading-loose">
          Here&apos;s a rundown of what&apos;s happening today
        </p>
        <Button className=" w-[9.5625rem]">Add New Guest</Button>
      </div>
      <div className=" flex gap-[1.875rem] flex-col md:flex-row">
        <div className="md:w-[65%] w-full gap-y-[1.875rem] flex flex-col">
          <StatisticsCards />
          <div>
            <div className=" h-[4.5rem] border border-[#272849] rounded-md flex justify-between items-center px-6 py-4">
              <p className=" font-semibold">Today&apos;s bookings</p>
              <p className="text-violet-300 text-sm font-medium capitalize leading-tight">
                View All bookings
              </p>
            </div>
            <div className=" w-full max-w-full h-[30.9375rem] max-h-[30.9375rem]">
              <TableGroup data={data} columns={columns} />
            </div>
          </div>
        </div>

        <Alerts />
      </div>
    </>
  );
}
