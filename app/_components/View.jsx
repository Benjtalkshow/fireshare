"use client";

import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { tailwindEffect } from "../_data/constants";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { useState, useContext } from "react";

export const View = ({ fileInfo }) => {
  const [password, setPassword] = useState("");

  const handleDownload = () => {
    window.open(`${fileInfo?.fileUrl}`, "_blank");
  };
  return (
    <>
    <section className="mt-[7rem]">
      <Link href={`/`} className="">
        <Button className="text-white rounded-none py-3 bg-teal-600 text-md flex mb-3 items-center gap-2 font-semibold cursor-pointer">
        <ArrowLeft size={26} />
        <label className="">
          FireShare
        </label>
        </Button>
      </Link>
      <div
        className={`${tailwindEffect} p-5 sm:p-10 bg-white shadow-md m-auto`}
      >
        <h1 className="font-bold text-xl">
          <span className="text-teal-600">{fileInfo?.userName}</span> shared you
          a file 😊
        </h1>
        <Image
          src={`/folder.png`}
          width={200}
          height={200}
          alt="folder.png"
          className="my-5 m-auto w-20 sm:w-1/2 h-20 sm:h-1/2"
        />
        {!fileInfo?.password.trim() || fileInfo?.password.trim() < 3 ? (
          <></>
        ) : (
          <>
            <input
              placeholder="Unlock file with Passowrd"
              type="password"
              className="w-full border-gray-400 border-[2px] rounded-md p-2 focus:outline-teal-600 text-center my-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        <ul className="">
          <li className="text-lg">
            <h1>
              <span className="font-semibold">File Name:</span>{" "}
              {fileInfo?.fileName}
            </h1>
          </li>
          <li className="text-lg">
            <h1>
              <span className="font-semibold">File Type:</span>{" "}
              {fileInfo?.fileType}
            </h1>
          </li>
          <li className="text-lg">
            <h1>
              <span className="font-semibold text-teal-600">File Type:</span>{" "}
              {(fileInfo?.fileSize / 1024 / 1024).toFixed(2) + `MB`}
            </h1>
          </li>
        </ul>
        <div className="w-full flex justify-center mt-5">
          <Button
            className="text-white gap-3 w-full bg-teal-600 hover:bg-teal-700 flex items-center  px-5 py-3 rounded-none"
            onClick={handleDownload}
            disabled={
              fileInfo &&
              fileInfo.password.trim() &&
              password.trim() !== fileInfo.password.trim()
            }
          >
            <span>Download</span> <Download size={20} />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};
