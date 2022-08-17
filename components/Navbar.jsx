import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed flex w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between relative items-center w-full h-full px-4 mx-auto bg-white">
      <Image src="/../public/zeuslogo.png" alt="/" width="170" height="70"/>
      </div>
      <div className="flex items-center justify-center bg-white">
        <ul className="flex font-semibold">
          <Link href="/">
            <a className="ml-10 text-md uppercase px-4 py-2 hover:border-b">Home</a>
          </Link>
          <Link href="/contact">
            <a className="ml-10 text-md uppercase px-4 py-2 hover:border-b">Contact</a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar