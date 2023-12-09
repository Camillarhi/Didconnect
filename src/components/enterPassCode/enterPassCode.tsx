import OtpInput from "react18-input-otp";
import RegisterTabGuide from "../registerGuideTab/registerTabGuide";

export default function EnterPassCode({
  password,
  setPassword,
  onSubmitPassword,
}: {
  password: string;
  setPassword: (a: any) => void;
  onSubmitPassword: () => void;
}) {
    
  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <div className="md:flex md:justify-center md:items-center w-full md:mt-[3.5rem]">
        <div className=" md:w-[38.75rem] md:h-[15.25rem] md:border md:shadow md:rounded-lg border-[#272849] md:pt-6 md:pb-8 md:px-6">
          <RegisterTabGuide
            title="Enter Your Passcode"
            description="Please enter your 6-digit passcode "
          />
          <div className=" mt-16">
            <OtpInput
              value={password}
              onChange={(enteredOtp: any) => {
                setPassword(enteredOtp);
              }}
              numInputs={6}
              isInputNum
              isInputSecure
              inputStyle={
                "w-6 h-6 bg-gray-900 rounded-sm border border-slate-600"
              }
              containerStyle={
                "w-full h-fit justify-center items-center gap-4 inline-flex"
              }
              onSubmit={() => onSubmitPassword()}
            />
          </div>

          <div className="text-center text-[#DBDCDE] text-sm font-normal leading-tight mt-6">
            Enter your passcode
          </div>
        </div>
      </div>
    </div>
  );
}
