import React from 'react'
import { tailwindEffect, tailwindMargin, tailwindPadding } from '../_data/constants'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className={`bg-teal-500 ${tailwindEffect} ${tailwindMargin} py-14 text-white `}>
    <div className="text-center w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Start Sharing Your Files Today
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 px-4">
        Our file-sharing platform is free to use and easy to get started
        with.
      </p>
      <Link href={`/sign-up`}>
            <button className="bg-white text-teal-600 border-[1px] border-white hover:bg-teal-900 whitespace-nowrap space-x-1 px-[2rem] py-2.5 text-md font-medium hover:text-white shadow">
              <p>Sign Up</p>
            </button>
            </Link>
    </div>
  </div>
  )
}

export default CallToAction