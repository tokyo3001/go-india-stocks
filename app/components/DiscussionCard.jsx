"use client";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { useState } from "react";
const DiscussionCard = ({ user }) => {
  const [like, setLike] = useState(false);
  function handleLike() {
    setLike(!like);
  }
  return (
    <div className="relative flex gap-2 bg-white rounded-lg p-6 shadow-lg">
      {/*Left User Image */}

      <div>
        <BiUserCircle className=" h-[40px] w-[40px]" />
      </div>
      {/* Right Post */}
      <div>
        {/* Time posted */}
        <p className="absolute text-blue-600 top-1 right-5 font-semibold text-sm">
          2 min ago
        </p>
        {/* User Name */}
        <div className="flex justify-left gap-4 items-center">
          <p className="text-sm font-bold">{user ? user : "Lorem Ipsum"}</p>
          <button className="bg-yellow-400 text-white rounded-full px-4 py-1 text-xs font-semibold whitespace-nowrap">
            Sector 3
          </button>
        </div>
        {/* Post Text */}
        <div className="my-6 tracking-tight w-[85%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ullam debitis laudantium, vitae quae ut quo, tempora corrupti
            ratione quia assumenda excepturi eaque aut a quis officiis? Enim,
            sapiente eveniet.
          </p>
        </div>
        <div className="my-6 text-xl flex justify-center gap-10 w-[85%]">
          <button onClick={handleLike} className="font-bold">
            {!like ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-800" />
            )}
          </button>
          <AiOutlineEye />
          <BiMessageAlt />
          <AiOutlineShareAlt />
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
