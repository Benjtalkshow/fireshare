import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="w-full border-y-[1px] border-gray-300 grid gap-5 place-content-center py-5">
      Header <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Header;
