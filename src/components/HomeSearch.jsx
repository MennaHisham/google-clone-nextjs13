'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }
    async function randomSearch(){
      setRandomSearchLoading(true);
      const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res)=>res.json())
      .then((data)=>data[0]);
      if(!response) return;
      router.push(`/search/web?searchTerm=${response}`);
      setRandomSearchLoading(false);
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-width-[90%] border border-gray-200 px-5 py-3 
      rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
      <AiOutlineSearch className="mr-3 text-xl text-gray-500"/>
      <input type="text" className="flex-grow focus:outline-none" onChange={(e)=> setInput(e.target.value)} value={input}/>
      <BsFillMicFill className="text-lg"/>
      </form>
      <div className="flex flex-col justify-center mt-5 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <button onClick={handleSubmit} className="btn">Google Search</button>
        <button onClick={randomSearch} className="flex items-center justify-center btn disabled:opacity-80">
          {randomSearchLoading ? (<Image src="spinner.svg" alt="loading..." className="h-6 text-center"/>) : 
          ("I'm Feeling Lucky")}</button>
      </div>
    </>
  )
}
