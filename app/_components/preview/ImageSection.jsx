import React from "react";
import Image from "next/image";
import { tailwindEffect } from "../../_data/constants";

const ImageSection = ({ url, imageName, imageType, imageSize }) => {
  return (
    <div
      className={`${tailwindEffect} w-full md:w-1/2 m-auto border-gray-300 border-[1px] rounded-md py-5 px-10 shadow-md text-center`}
    >
      <div className="img overflow-clip group">
        <Image
          src={url || `/thumbnail.jpg`}
          width={250}
          height={250}
          className="m-auto w-[200px] h-[200px] transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <h1 className="font-bold text-gray-300 mt-2">
        <label className="text-black">File Name: </label> {imageName}
      </h1>
      <h1 className="font-bold">
        <label className="text-black">File Type: </label>
        {imageType}
      </h1>
      <h1 className="font-bold">
        <label className="text-black">File Size: </label>
        <span className="text-teal-600">
          {(imageSize / 1024 / 1024).toFixed(2) + `MB`}
        </span>
      </h1>
    </div>
  );
};

export default ImageSection;
