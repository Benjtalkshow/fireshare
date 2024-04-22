"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Home, File, ShieldPlus } from "lucide-react";
import Logo from "../Logo";

const Sidebar = () => {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();
  
  return (
    <div className="hidden md:flex h-screen w-1/4 flex-col justify-between border-e bg-white">
      <div className="pb-6">
        {/* logo */}
        <div className="text-center py-[1.14rem] border-[1px] border-b-gray-300">
          <Logo />
        </div>
        <ul className="mt-6 space-y-10">
          {user && isSignedIn && (
            <li className="px-4 py-4 font-semibold text-xl">
              Hi, {user?.fullName}✌️
            </li>
          )}
          <Link href={`/dashboard`} prefetch={true}>
            <li
              className={`${
                pathname == "/dashboard" &&
                "bg-gray-100   text-teal-600 rounded-tr-full rounded-br-full"
              } text-gray-500 flex items-center gap-3  px-4 py-3 mb-3 font-semibold transition  hover:text-teal-600 cursor-pointer`}
            >
              <Home size={28} />{" "}
              <label className="cursor-pointer">Dashboard</label>
            </li>
          </Link>
          <Link href={`/file`} prefetch={true}>
            <li
              className={`${
                pathname == "/file" &&
                "bg-gray-100  text-teal-600 rounded-tr-full rounded-br-full"
              } text-gray-500 flex items-center gap-3 py-3 mb-3 px-4 font-semibold  transition hover:text-teal-600 cursor-pointer`}
            >
              <File size={28} />
              <label className="cursor-pointer">My Files</label>
            </li>
          </Link>
          <Link href={`/upgrade`} prefetch={true}>
            <li
              className={`${
                pathname == "/upgrade" &&
                "bg-gray-100  text-teal-600 rounded-tr-full rounded-br-full"
              } text-gray-500 flex items-center gap-3 py-3 mb-3 px-4 font-semibold  transition hover:text-teal-600 cursor-pointer`}
            >
              <ShieldPlus size={28} />
              <label className="cursor-pointer">Upgrade</label>
            </li>
          </Link>
        </ul>
      </div>

      {user && isSignedIn && (
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src={user?.imageUrl}
              className="size-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs">
                <strong className="font-medium md:block">
                  {user?.fullName || null}
                </strong>
                <span className="">
                  {user?.primaryEmailAddress?.emailAddress || null}
                </span>
              </p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
