import Button from "@/components/button/button";
import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className=" flex items-center justify-center gap-4 h-[100vh] w-full">
      <Link href={"/hotel"}>
        <Button className=" w-[9.5625rem]">Org</Button>
      </Link>
      <Link href={"/customer/home"}>
        <Button className=" w-[9.5625rem]">Customer</Button>
      </Link>
    </div>
  );
}
