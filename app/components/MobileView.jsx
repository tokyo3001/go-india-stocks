"use client";

import { useState } from "react";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
import LeftMenu from "./LeftMenu";
import MobileMenu from "./MobileMenu";

const MobileView = () => {
  const [discussion, setDiscussion] = useState(true);
  const [market, setMarket] = useState(false);
  function handleDiscussion() {
    setDiscussion(true);
    setMarket(false);
  }
  function handleMarket() {
    setDiscussion(false);
    setMarket(true);
  }
  return (
    <div className="h-full">
      <div>
        <LeftMenu />
      </div>
      <div className="flex w-screen text-white  bg-[#1a3c61] ">
        <button
          onClick={handleDiscussion}
          className={`w-full ${discussion && "bg-[#0f2339]"} py-2`}
        >
          Discussion Forum
        </button>
        <button
          onClick={handleMarket}
          className={`w-full ${market && "bg-[#0f2339]"} py-2`}
        >
          Market Stories
        </button>
      </div>
      <div className="pt-5">
        <div>{discussion ? <DiscussionForum /> : <MarketStories />}</div>
        <div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
