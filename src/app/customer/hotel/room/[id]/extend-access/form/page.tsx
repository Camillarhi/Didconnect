"use client";
import Input from "@/components/input/input";
import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import AccessModal from "@/components/modals/accessModal";
import { useDisclosure } from "@/hooks";

export default function AccessForm() {
  const { open, isOpen, close } = useDisclosure();

  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack
        text="Extend access to your room"
        backgroundColor="bg-[#151628]"
      />
      <div className="w-full h-full px-4 pt-6 pb-10 flex-col justify-between items-center inline-flex">
        <div className="self-stretch h-full flex-col justify-start items-center gap-6 flex">
          <div className="w-full h-10 justify-center items-center inline-flex">
            <div className="w-full text-zinc-300 text-sm font-normal leading-tight">
              Please provide details of the person you wish to grant access to
              your room
            </div>
          </div>
          <div className="self-stretch h-full flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-white text-sm font-normal leading-tight">
                DID
              </div>
              <Input
                type="text"
                className="h-9 "
                placeHolder="did:key:z6MkuVEW9MmRiz92zC7nGvoTT2HJWS3rB533j79Y9Z1i8k6d"
              />
            </div>
            <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-sm font-normal leading-tight">
                  Name
                </div>
                <Input
                  type="text"
                  className="h-9 "
                  placeHolder="Jordan Peters"
                />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="py-1 justify-start items-center gap-2 flex">
                  <label className="cursor-pointer flex items-center">
                    <input
                      type="checkbox"
                      className=" w-5 h-5 accent-[#151628] text-[#151628] cursor-pointer bg-transparent"
                    />
                    <span className=" text-white text-xs font-normal leading-none ml-2">
                      Share with hotel
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-white text-sm font-normal leading-tight">
                Purpose of request
              </div>
              <Input type="text" className="h-9 " placeHolder="Guest" />
            </div>
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="text-white text-sm font-normal leading-tight">
                From
              </div>

              <Input type="date" className="h-9 " placeHolder="Guest" />
            </div>
            <div className="self-stretch h-[3.75rem] flex-col justify-start items-start gap-1 flex">
              <div className="text-white text-sm font-normal leading-tight">
                To
              </div>
              <Input type="date" className="h-9 " />
            </div>
          </div>
        </div>
        <div
          className=" mt-3 self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full flex-col justify-center items-center gap-2.5 flex"
          onClick={() => open()}
        >
          <div className="text-center text-white text-sm font-medium capitalize leading-tight">
            Submit
          </div>
        </div>
      </div>
      <AccessModal isOpen={isOpen} close={close} />
    </div>
  );
}
