import { Button } from "@/components/ui/button";
import React from "react";
import { tailwindEffect, tailwindPadding } from "../_data/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={`bg-transparent ${tailwindEffect}  mt-20`}>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  items-center justify-center flex-col">
          {/* badge */}
          <span className="inline-flex items-center justify-center rounded-full bg-teal-100 px-2.5 py-2 mb-5 text-teal-600">
            <p className="whitespace-nowrap text-sm">
              😊 Welcome to your Home Service Delivery World
            </p>
          </span>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-5xl font-extrabold  text-3xl mb-2 sm:mb-4  text-black">
              Microdosing synth tattooed
            </h1>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-teal-600">
              Vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href={`/sign-up`}>
                <Button className="bg-teal-600 w-full sm:w-fit  hover:bg-teal-800 whitespace-nowrap space-x-1 px-3 py-2.5 text-md font-medium text-white shadow">
                  <p>Get Started</p>
                </Button>
              </Link>
              <Link href={"/sign-in"}>
                <Button className="whitespace-nowrap w-full sm:w-fit hover:bg-slate-300  bg-gray-300 px-3 py-2.5 text-md font-medium text-teal-600">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
