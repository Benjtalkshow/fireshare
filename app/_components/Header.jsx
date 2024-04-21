"use client";
import React, { useEffect } from "react";
import { Plus, Menu, Home, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";
import { tailwindPadding } from "../_data/constants";
import Logo from "../_components/Logo";

const Header = () => {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

  if (
    pathname == "/file" ||
    pathname == "/upgrade" ||
    pathname == "/dashboard" ||
    pathname.startsWith("/preview") ||
    pathname.startsWith("/view")
  ) {
    return <></>;
  }
  return (
    <header className="bg-white shadow-md mb-3 w-full">
      <div className={`${tailwindPadding}`}>
        <div className="flex py-5 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            {/* logo */}
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                {pathname == "/" && isSignedIn ? (
                  <Link href={`/dashboard`} prefetch={true}>
                    <li
                      className={`${
                        pathname == "/dashboard" &&
                        "text-teal-600 font-semibold"
                      } text-gray-500 transition hover:text-teal-600 cursor-pointer`}
                    >
                      Dashboard{" "}
                    </li>
                  </Link>
                ) : ( 
                  <Link href={`/`} prefetch={true}>
                    <li
                      className={`${
                        pathname == "/" && "text-teal-600 font-semibold hidden"
                      } text-gray-500 transition hover:text-teal-600 cursor-pointer`}
                    >
                      Home{" "}
                    </li>
                  </Link>
                  
                )}
              </ul>
            </nav>

            <div className="space-x-3 flex items-center">
              {!isSignedIn && (
                <Link
                  href={`/sign-up`}
                  className={`${pathname === "/sign-up" ? "hidden" : "grid"}`}
                >
                  <button className="bg-teal-600  hover:bg-teal-800 whitespace-nowrap space-x-1 px-3 py-2.5 text-md font-medium text-white shadow">
                    <p>Get Started</p>
                  </button>
                </Link>
              )}
              {isSignedIn ? (
                <>
                  <UserButton afterSignOutUrl="/">
                    <UserButton.UserProfileLink
                      label="Dashboard"
                      url="/dashboard"
                      labelIcon={<LayoutDashboard size={18} />}
                    />
                  </UserButton>
                </>
              ) : (
                <Link
                  href={"/sign-in"}
                  className={`${pathname === "/sign-in" ? "hidden" : "grid"}`}
                >
                  <button
                    className={`${
                      pathname === "/sign-up"
                        ? "bg-teal-600  hover:bg-teal-800 whitespace-nowrap space-x-1 px-3 py-2.5 text-md font-medium text-white shadow"
                        : "whitespace-nowrap hover:bg-slate-300  bg-gray-100 px-3 py-2.5 text-md font-medium"
                    }`}
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
