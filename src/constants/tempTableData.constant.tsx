import StatusBadge from "@/components/statusBadge/statusBadge";
import Image from "next/image";

export const data = [
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

export const columns = [
  { column: "Code", key: "Code" },
  { column: "name", key: "name" },
  { column: "Room No.", key: "Room No." },
  { column: "Status", key: "Status" },
  { column: "Check-out date", key: "Check-out date" },
  { column: "", key: "action" },
];
