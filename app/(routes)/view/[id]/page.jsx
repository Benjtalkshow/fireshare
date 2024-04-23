"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import { getFileInfo } from "../../../../utils/firebase";
import { View as ViewCard } from "../../../_components/View";

const View = () => {
  const { id } = useParams();
  const [fileInfo, setFileInfo] = useState();

  useEffect(() => {
    const fetchFileInfo = async () => {
      try {
        const info = await getFileInfo(id);
        setFileInfo(info);
      } catch (error) {
        console.error("Error fetching file info:", error);
      }
    };

    fetchFileInfo();
  }, [id]);

 

  return (
    <div className="w-full px-3  flex justify-center items-center h-[100%]">
      <ViewCard fileInfo={fileInfo} />
    </div>
  );
};

export default View;
