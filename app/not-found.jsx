import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full bg-[#eeeff1]">
      <div class="flex items-center justify-center min-h-screen bg-white py-48">
        <div class="flex flex-col">
          <div class="flex flex-col items-center">
            <div class="text-teal-600 font-bold text-5xl sm:text-7xl">404</div>

            <div class="font-bold text-3xl  sm:text-5xl mt-3">
              This page does not exist
            </div>

            <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-2">
              The page you are looking for could not be found.
            </div>
          </div>

          <div class="flex flex-col mt-8">
            <div class="text-gray-400 font-bold uppercase">Continue With</div>

            <div class="flex flex-col items-stretch mt-5">
              <div
                class="flex flex-row items-center group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div class="rounded-md bg-teal-600 text-white flex p-3 justify-center items-center h-fit w-fit">
                 <Home size={26} />
                </div>

                <div class="grow flex flex-col pl-5 pt-2">
                  <Link href={`/`}>
                  <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:text-teal-600">
                    Home Page
                  </div>
                  </Link>
                  <div
                    class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                  >
                    Everything starts here
                  </div>
                </div>

                <i
                  class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
