"use client"
import ImageSection from "@/app/_components/preview/ImageSection";
import InputSection from "@/app/_components/preview/InputSection";
import { getFileInfo } from "@/utils/firebase";
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
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="w-full flex">
            <ImageSection id={id} url={fileInfo.fileUrl}/>
            <InputSection id={id}/>
        </div>
    </div>
  );
};

export default Preivew;