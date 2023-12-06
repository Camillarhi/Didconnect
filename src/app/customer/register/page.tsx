"use client";
import InputGroup from "@/components/input/inputGroup";
import RegisterTabGuide from "@/components/registerGuideTab/registerTabGuide";

export default function RegisterGuest() {
  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-[100vh] max-h-full max-w-full overflow-y-auto w-full flex flex-col">
      <RegisterTabGuide
        title="Set Up A Passcode"
        description="You have exclusive ownership of your data, and you alone have the right to decide when and how to share it"
      />

      <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex mt-6">
        <InputGroup
          label="Name"
          type="text"
          className="h-9 "
          placeHolder="Jordan Peters"
        />

        <InputGroup
          label="Email address"
          type="text"
          className="h-9 "
          placeHolder="Jordan@Peters.com"
        />

        <InputGroup
          label="Phone number"
          type="text"
          className="h-9 "
          placeHolder="+234947993"
        />
      </div>
      <div
        className=" mt-3 self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex"
        // onClick={() => open()}
      >
        <div className="text-center text-white text-sm font-medium capitalize leading-tight">
          Finish
        </div>
      </div>
    </div>
  );
}
