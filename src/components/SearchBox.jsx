import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

export default function SearchBox() {
  return (
    <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
      <input type="text" className="w-full focus:outline-none"/>
      <RxCross2 className="mr-3 text-2xl text-gray-500 cursor-pointer sm:mr-2" />
      <BsFillMicFill className="hidden pl-4 mr-3 text-4xl text-blue-500 border-l-2 border-gray-300 sm:inline-flex gray-300"/>
      <AiOutlineSearch className="hidden text-2xl text-blue-500 cursor-pointer sm:inline-flex"/>
    </form>
  )
}
