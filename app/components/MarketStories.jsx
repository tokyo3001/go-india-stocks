import StoryCard from "./StoryCard";
const MarketStories = () => {
  return (
    <div className="flex flex-col min-h-[100%] overflow-y-hidden w-full">
      {/* Heading */}
      <h1 className="text-xl text-red-600 font-semibold px-5 py-1 hidden sm:block">
        MARKET STORIES
      </h1>
      {/* Stories */}
      <div className="pr-5 w-full flex items-center justify-center">
        <div className="px-5 sm:mt-9 grid grid-auto-fit xl:grid-cols-2 gap-1 overflow-x-hidden scrollbar-hide sm:scrollbar-default sm:overflow-y-scroll h-[calc(100vh-280px)] sm:h-[calc(100vh-270px)] justify-center">
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" width={35} />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
          <StoryCard image="https://www.india.com/wp-content/uploads/2021/04/share-market.jpg" />
          <StoryCard image="https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-Funds_Sensex_personal-finance-770x433.png?impolicy=website&width=770&height=431" />
        </div>
      </div>
    </div>
  );
};

export default MarketStories;
