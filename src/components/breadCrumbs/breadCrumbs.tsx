"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BreadCrumbs() {
  const [firstCrumbText, setFirstCrumbText] = useState<string>("Home");
  const [secondCrumbText, setSecondCrumbText] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      if (pathname === "/hotel") {
        setFirstCrumbText("Home");
        setSecondCrumbText("");
        return;
      }

      const processedPath = processPathName();
      console.log(processedPath);
      setFirstCrumbText(processedPath[0]);
      setSecondCrumbText(processedPath[1]);
    }
  }, [pathname]);

  const processPathName = () => {
    let inputString = pathname;
    if (inputString.startsWith("/hotel/")) {
      // inputString = inputString.substring(1);
      inputString = inputString?.replace("/hotel/", "");
    }
    const parts = inputString.split("/");

    // Replace special characters with ' ' in both parts
    const firstPart = parts[0]?.replace(/[^\w\s]/g, " ");
    let secondPart = "";
    if (parts[1]) {
      secondPart = parts[1]?.replace(/[^\w\s]/g, " ");
    }

    return [firstPart, secondPart];
  };

  return (
    <div className=" text-sm leading-4 capitalize">
      <span className={`${secondCrumbText !== "" && "text-[#67687E]"}`}>
        {firstCrumbText}
        {secondCrumbText !== "" && " /"}
      </span>
      <span className=" capitalize"> {secondCrumbText}</span>
    </div>
  );
}
