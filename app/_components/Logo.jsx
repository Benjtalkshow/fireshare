"use client"
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link className="block text-teal-600" href={`/`} prefetch={true}>
    <h1 className="text-teal-600 font-bold text-xl sm:text-3xl">FireShare</h1>
  </Link>
  )
}

export default Logo