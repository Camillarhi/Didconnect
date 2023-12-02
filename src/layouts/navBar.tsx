import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import Image from "next/image";

export default function NavBar({ toggle }: { toggle: () => void }) {
  return (
    <div className="bg-[#151628] h-[3.5rem] w-full flex justify-between items-center px-[1.875rem] py-4 shadow-inner border-b border-b-[#DBDCDE] text-white">
      <div
        className="w-[9.3125rem] h-[2.625rem] px-[1.375rem] justify-start items-center inline-flex md:hidden"
        onClick={() => toggle()}
      >
        <Image alt="" src={"/assets/svgs/logo.svg"} height={400} width={500} />
      </div>
      <div>
        <BreadCrumbs />
      </div>
      <div className=" flex gap-x-4 w-[10.875rem] h-6">
        <div className="w-[8.875rem] h-6 justify-start items-center gap-1 inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 px-[3.32px] pt-[7.75px] pb-[8.12px] bg-violet-700 rounded-[100px] justify-center items-center inline-flex">
                <div className="w-[17.35px] h-[8.12px] text-center text-white text-[10px] font-semibold font-['Inter'] leading-none">
                  TH
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-xs font-normal leading-none">
            Transcorp Hilton
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative cursor-pointer">
              <Image
                alt=""
                src={"/assets/svgs/down-arrow.svg"}
                height={16}
                width={16}
              />
            </div>
          </div>
        </div>
        <Image
          alt=""
          src={"/assets/svgs/bell.svg"}
          height={16}
          width={16}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}
