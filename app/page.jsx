import DiscussionForum from "./components/DiscussionForum";
import LeftMenu from "./components/LeftMenu";
import MarketStories from "./components/MarketStories";
import MobileView from "./components/MobileView";
export default function Home() {
  return (
    <main className="max-w-full h-full">
      <div className="hidden h-full sm:flex justify-between w-full ">
        <div>
          <LeftMenu />
        </div>
        <div className="flex ">
          <div className="pt-5 flex-1">
            <DiscussionForum />
          </div>
          <div className="pt-5">
            <MarketStories />
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <MobileView />

      {/* new Post button */}
      <div className="absolute text-3xl  h-10 w-10 bottom-5 right-5 rounded-full text-white bg-[#1a3c61] hover:bg-[#11283f] cursor-pointer">
        <p className="flex justify-center items-center text-bold">+</p>
      </div>
    </main>
  );
}
