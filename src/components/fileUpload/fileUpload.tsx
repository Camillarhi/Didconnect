import Image from "next/image";
import React, { ChangeEvent } from "react";

type FileInputProps = {
  onFilesSelect: (files: FileList | null) => void;
};

export default function FileUpload({ onFilesSelect }: FileInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 5) {
      alert("Please select no more than 5 files.");
      e.preventDefault(); 
      return;
    }
    onFilesSelect(files);
  };

  return (
    <div
      onClick={() => document.getElementById("upload-hotel-images")?.click()}
      className=" cursor-pointer w-[3.9375rem] h-11 pl-[1.375rem] pr-[1.3125rem] py-3 bg-gray-900 rounded-lg border border-slate-600 justify-center items-center inline-flex border-dashed"
    >
      <Image alt="" src={"/assets/svgs/upload.svg"} height={20} width={20} />
      <input
        type="file"
        id="upload-hotel-images"
        multiple
        className=" hidden"
        accept="image/png, image/gif, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
}
