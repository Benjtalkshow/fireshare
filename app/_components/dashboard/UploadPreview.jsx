import React from "react";
import Image from "next/image";

const UploadPreview = ({ file }) => {
  return (
    <div className="mt-5 gap-3 py-5 px-8 w-full flex items-center justify-center border-[1px] border-teal-600 rounded-lg">
      <Image src="/file.png" className="w-[70px] h-[70px]" width={70} height={70} />
      <div>
      <p className="font-bold text-left">{file? file.name : `No File Name`}</p>
      <p className="font-bold text-teal-600 text-left">{file? file.type : `No File Type`} {" / "} {file? (file.size/1024/1024).toFixed(0) + `MB` : `No File Size`}</p>
      </div>
    </div>
  );
};

export default UploadPreview;
