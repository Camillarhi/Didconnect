import MobileGoBack from "@/components/mobileGoBack/mobileGoBack";
import Image from "next/image";
import Link from "next/link";

export default function ViewHotel({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="bg-[#151628] text-white px-4 py-6 h-full max-h-full max-w-full overflow-y-auto w-full">
      <MobileGoBack text={`Four Seasons`} backgroundColor="bg-[#151628]" />
      <div className=" w-full mt-6 flex flex-col gap-y-4">
        <div className="w-full rounded-lg justify-center items-center inline-flex">
          <Image
            alt=""
            src={"/assets/images/hotel.png"}
            height={230.363}
            width={345.545}
            className=" rounded-md"
          />
        </div>

        <div className="self-stretch justify-between items-start inline-flex">
          <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
            <div className="w-3 h-3 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/wifi-icon.svg"}
                height={12}
                width={12}
                className=" rounded-md"
              />
            </div>
            <div className="text-white text-[.625rem] font-normal leading-none">
              Free Wifi
            </div>
          </div>
          <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
            <div className="w-3 h-3 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/breakfast-bell.svg"}
                height={12}
                width={12}
                className=" rounded-md"
              />
            </div>
            <div className="text-white text-[.625rem] font-normal leading-none">
              Free Breakfast
            </div>
          </div>
          <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
            <div className="w-3 h-3 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/smart-icon.svg"}
                height={12}
                width={12}
                className=" rounded-md"
              />
            </div>
            <div className="text-white text-[.625rem] font-normal leading-none">
              Smart facilities
            </div>
          </div>
          <div className="px-2 py-1 bg-indigo-950 rounded justify-start items-center gap-1 flex">
            <div className="w-3 h-3 justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/svgs/star.svg"}
                height={12}
                width={12}
                className=" rounded-md"
              />
            </div>
            <div className="text-center text-white text-[.625rem] font-normal leading-none">
              4.9
            </div>
          </div>
        </div>

        <div className="self-stretch pb-4 bg-gray-900 shadow-inner justify-between items-start inline-flex border-[#272849] border-b">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-white text-base font-semibold leading-normal">
              Four Seasons
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <Image
                  alt=""
                  src={"/assets/svgs/location.svg"}
                  height={14}
                  width={14}
                  className=" rounded-md"
                />
              </div>
              <div className="text-zinc-300 text-xs font-normal leading-none">
                California, USA
              </div>
            </div>
          </div>
          <div>
            <span className="text-white text-xl font-semibold leading-7">
              $400
            </span>
            <span className="text-gray-500 text-xs font-normal leading-none">
              /night
            </span>
          </div>
        </div>

        <div className="self-stretch pb-4 bg-gray-900 shadow-inner flex-col justify-start items-start gap-4 flex border-[#272849] border-b">
          <div className="text-white text-xs font-medium uppercase leading-none">
            Description
          </div>
          <div className="self-stretch">
            <span className="text-zinc-300 text-xs font-normal leading-none">
              Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel.
              elegant 5 star hotel overlooking the sea. perfect for a romantic,
              charming...
            </span>
            <span className="text-violet-300 text-xs font-normal leading-none">
              Read More
            </span>
          </div>
        </div>

        <div className="self-stretch h-[7.125rem] flex-col justify-start items-start gap-4 flex">
          <div className="text-white text-xs font-medium uppercase leading-none">
            Preview
          </div>
          <div className="justify-start items-start gap-4 inline-flex w-full h-fit max-w-full max-h-fit overflow-x-auto">
            <div className="w-[6.125rem] h-[5.125rem] rounded justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/images/hotel.png"}
                height={82}
                width={98}
                className=" rounded-md"
              />
            </div>
            <div className="w-[6.125rem] h-[5.125rem] rounded justify-center items-center flex">
              <Image
                alt=""
                src={"/assets/images/hotel.png"}
                height={82}
                width={98}
                className=" rounded-md"
              />
            </div>
            <div className="w-[6.125rem] h-[5.125rem] rounded justify-start items-center flex">
              <Image
                alt=""
                src={"/assets/images/hotel.png"}
                height={82}
                width={98}
                className=" rounded-md"
              />
            </div>
            <div className="w-[6.125rem] h-[5.125rem] rounded justify-start items-center flex">
              <Image
                alt=""
                src={"/assets/images/hotel.png"}
                height={82}
                width={98}
                className=" rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/customer/explore/hotel/${id}/personal-details/`}
        className=" cursor-pointer self-stretch h-10 px-6 py-2.5 bg-violet-800 rounded-full mt-10 flex-col justify-center items-center gap-2.5 flex"
      >
        <div className="text-center text-white text-sm font-medium capitalize leading-tight">
          Book now
        </div>
      </Link>
    </div>
  );
}
