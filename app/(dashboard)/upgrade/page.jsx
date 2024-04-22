"use client"
import React from "react";
import toast from "react-hot-toast";
import { plans } from "../../_data/constants";



const Upgrade = () => {

  const handleToast = () => {
    toast.error("Feature not available!!");
  };


  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {plans.map((plan) => (
          <div className="divide-y divide-gray-200 rounded-none-2xl border border-gray-200 shadow-sm" key={plan.name}>
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                {plan.name}
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  ${plan.price}
                </strong>

                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>

              <button
                className="mt-4 block w-full rounded-none border border-teal-600  bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring-0 active:text-teal-600 sm:mt-6"
                href="#"
                onClick={handleToast}
              >
                Get Started
              </button>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-1" key={feature.name}>
                    <svg
                      xmlns="(link unavailable)"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={feature.icon === "X" ? "size-5 text-red-700" : "size-5 text-teal-600"}
                    >
                      {feature.icon === "X" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      )}
                    </svg>

                    <span className="text-gray-700">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upgrade;