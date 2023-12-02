import React from "react";
import StatisticsCard from "./statisticsCard";

export default function StatisticsCards() {
  return (
    <div className="w-[49.375rem] h-[9.5rem] justify-between items-center gap-4 flex">
      <StatisticsCard title=" Guests CHECK-IN" stats="50/100" />
      <StatisticsCard title=" Guests CHECK-OUT" stats="50/76" />
    </div>
  );
}
