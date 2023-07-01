"use client";
import { FaUserAlt } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage, AiFillDollarCircle } from "react-icons/ai";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { useState } from "react";
const LeftMenu = () => {
  const [menu, setMenu] = useState(false);

  function menuToggle() {
    setMenu(!menu);
  }
  return (
    <div className="h-[calc(100vh-169px)] z-[20] absolute lg:relative mr-8">
      {menu ? (
        <div className="h-full flex ">
          {/* Menu */}
          <div className="bg-[#1a3c61] text-white font-semibold tracking-tight h-full text-sm w-[300px]">
            {/*Hello User */}
            <div className="flex px-5 py-4 border-b border-gray-300/50 justify-between items-center">
              <div className="flex justify-between items-center gap-2">
                <FaUserAlt className="rounded-full text-2xl" />
                <p>Hello, User</p>
              </div>
              <BsBellFill className="rounded-full text-2xl" />
            </div>

            {/* Menu Items */}
            <div className="div py-2 w-full">
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full">
                <AiFillMessage className="text-xl" />
                <p>Discussion Forum</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full">
                <AiFillDollarCircle className="text-xl" />
                <p>Market Stories</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>Sentiment</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>Market</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>Sector</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>Watch List</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>Events</p>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 focus:bg-[#0f2339] w-full pl-11">
                <p>News/Interview</p>
              </button>
            </div>
          </div>
          {/* Close Menu Arrow */}
          <div className="">
            <button
              onClick={menuToggle}
              className="bg-[#1a3c61] text-white absolute top-[30vh] h-[60px] items-center flex rounded-r-sm"
            >
              <GoTriangleLeft />
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full">
          {/* Close Menu Arrow */}
          <button
            onClick={menuToggle}
            className="bg-[#1a3c61] text-white absolute top-[30vh] h-[60px] items-center flex rounded-r-sm"
          >
            <GoTriangleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftMenu;
