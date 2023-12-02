import AlertBox from "../alertBox/alertBox";

export default function Alerts() {
  return (
    <div className=" md:w-[35%] w-full border border-[#272849] rounded-md mt-[3.125rem] md:mt-0">
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
  );
}
