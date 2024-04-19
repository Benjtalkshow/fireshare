import { Button } from "../../components/ui/button";
import React from "react";
import {
  tailwindEffect,
  tailwindMargin,
  tailwindPadding,
} from "../_data/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={`${tailwindEffect} ${tailwindMargin}`}>
      <div className="bg-teal-500 text-white py-32 px-4 sm:px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h1 className="text-4xl text-center sm:text-left sm:text-5xl md:text-6xl font-bold mb-4">
            Securely Share Your Files
          </h1>
          <p className="text-lg sm:text-xl text-center sm:text-left md:text-2xl mb-8 text-gray-200">
            Our file-sharing platform makes it easy to upload, store, and share
            your files with anyone, anywhere.
          </p>
          <div className="flex w-full gap-4 justify-center sm:justify-normal">
            <Link href={`/sign-up`}>
            <button className="bg-white text-teal-600 border-[1px] border-white hover:bg-teal-900 whitespace-nowrap space-x-1 px-3 py-2.5 text-md font-medium hover:text-white shadow">
              <p>Get Started</p>
            </button>
            </Link>
            <Link href={`/sign-in`}>
            <button className="whitespace-nowrap hover:bg-slate-300  bg-transparent px-3 py-2.5 text-md font-medium border-[1px] border-white text-white hover:text-gray-300">
              Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
