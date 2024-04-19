"use client"
import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-white  border-y-[1px] border-gray-300 flex items-center justify-between md:justify-end px-5 py-5">
      <MobileNav />
      <UserButton afterSignOutUrl="/">
      <UserButton.UserProfileLink
        label="Home"
        url="/"
        labelIcon={<Home size={18}/>}
      />
      </UserButton>
    </div>
  );
};

export default Header;
