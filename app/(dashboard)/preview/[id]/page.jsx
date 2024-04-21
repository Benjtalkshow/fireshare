"use client";
import ImageSection from "../../../_components/preview/ImageSection";
import InputSection from "../../../_components/preview/InputSection";
import { tailwindPadding } from "../../../_data/constants";
import { getFileInfo } from "../../../../utils/firebase";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Preivew = () => {
  const { id } = useParams();
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    const fetchFileInfo = async () => {
      try {
        const info = await getFileInfo(id);
        console.log("File info:", info);
        setFileInfo(info);
      } catch (error) {
        console.error("Error fetching file info:", error);
      }
    };

    fetchFileInfo();
  }, [id]);

  if (!fileInfo) {
    return <div className="w-full text-center font-semibold p-2 sm:p-5 md:p-10 lg:p-20">Loading or No File Found</div>;
  }

  return (
    <div
      className={`w-full px-0 md:px-10 mt-10  lg:px-20 h-full flex justify-center items-center`}
    >
      <div className={`w-full flex flex-col md:flex-row justify-center gap-5`}>
        <ImageSection
          url={fileInfo?.fileUrl}
          imageName={fileInfo?.fileName}
          imageType={fileInfo?.fileType}
          imageSize={fileInfo?.fileSize}
        />
        <InputSection
          id={id}
          shortUrl={fileInfo?.shortUrl}
          userEmail={fileInfo?.userEmail}
        />
      </div>
    </div>
  );
};

export default Preivew;
