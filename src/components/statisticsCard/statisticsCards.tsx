import React from "react";
import StatisticsCard from "./statisticsCard";

export default function StatisticsCards() {
  return (
    <div className="w-full h-fit md:justify-between md:items-center gap-4 flex flex-col md:flex-row">
      <StatisticsCard title=" Guests CHECK-IN" stats="50/100" />
      <StatisticsCard title=" Guests CHECK-OUT" stats="50/76" />
    </div>
  );
}
