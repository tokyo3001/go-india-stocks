import { FiSearch } from "react-icons/fi";
import DiscussionCard from "./DiscussionCard";
const DiscussionForum = () => {
  return (
    <div className="h-full">
      {/* Heading and Filters */}
      <div>
        {/* Heading */}
        <h1 className="text-xl text-red-600 font-semibold px-5 py-1 hidden sm:block">
          DISCUSSION FORUM
        </h1>
        {/* Filters */}
        <div className="w-full px-5">
          <h1 className="font-bold">Filters</h1>
          <div className="w-full flex gap-2 justify-between items-center bg-white rounded-lg px-6 py-3 my-3 shadow-xl whitespace-nowrap">
            <button className="bg-red-700 text-white rounded-full px-4 py-1 text-xs font-semibold">
              Sector 1
            </button>
            <button className="bg-blue-600 text-white rounded-full px-4 py-1 text-xs font-semibold">
              Sector 2
            </button>
            <button className="bg-yellow-400 text-white rounded-full px-4 py-1 text-xs font-semibold">
              Sector 3
            </button>

            <div className="bg-gray-300 shadow-inner flex flex-grow items-center p-1 border-2 border-gray-400 rounded-full">
              <input
                type="text"
                className=" bg-transparent outline-none w-full text-sm px-2"
              />
              <FiSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="sm:pr-5">
        <div className="flex flex-col gap-6 px-5 overflow-y-scroll h-[calc(100vh-381px)] sm:h-[calc(100vh-336px)] pb-2 scrollbar-hide sm:scrollbar-default">
          <DiscussionCard user="Random User" />
          <DiscussionCard />
          <DiscussionCard />
          <DiscussionCard />
          <DiscussionCard />
          <DiscussionCard />
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
