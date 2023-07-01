import Image from "next/image";
import logo from "../assets/logo.jpeg";
import { FiSearch } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import RateBlackStrip from "./RateBlackStrip";

const Header = () => {
  return (
    <div className="flex-none sm:flex justify-between px-5 py-2 bg-white w-screen">
      {/* Left Section */}
      <div className="flex justify-between gap-10 items-center sm:flex-[0.7] sm:pr-[100px]">
        {/* Logo */}
        <Image src={logo} alt="Logo" height="60" width="60" />
        {/* Search */}
        <div className="bg-gray-300 shadow-inner flex flex-grow items-center p-1 border-2 border-gray-400 rounded ">
          <input type="text" className=" bg-transparent outline-none w-full" />
          <FiSearch />
        </div>
        <BiUserCircle className="h-[40px] w-[40px] sm:hidden" />
      </div>

      {/* Right Section */}
      <div className="flex justify-end sm:flex-[0.3] gap-4 items-center text-xs font-bold text-gray-700 tracking-tighter whitespace-nowrap">
        {/* Contact Us */}
        <p className="cursor-pointer hidden sm:block hover:shadow-lg hover:underline hover:text-black transition-all delay-50">
          Contact Us
        </p>
        {/* Sign Up */}
        <button className="border-2 border-gray-300 px-3 py-1 rounded hidden sm:block hover:shadow-lg hover:border-black hover:text-black transition-all delay-50">
          SIGN UP
        </button>
        {/* Sign In */}
        <button className="border-2 border-gray-300 px-3 py-1 rounded hidden sm:block hover:shadow-lg hover:border-black hover:text-black transition-all delay-50">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Header;
