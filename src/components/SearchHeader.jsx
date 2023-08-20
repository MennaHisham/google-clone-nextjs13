import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href={"/"}>
          <Image width="120" height="40" alt="search-header"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"/>
        </Link>
        <div className="flex-1">
          <SearchBox/>
        </div>
        <div className="hidden space-x-2 md:inline-flex ">
          <RiSettings3Line className="header-icon"/>
          <TbGridDots className="header-icon"/>
        </div>
        <button className="px-6 py-2 ml-2 font-medium text-white transition-all bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md">Sign in</button>
      </div>
      <SearchHeaderOptions/>
    </header>
  )
}
