import React from "react";
import ExploreCardImg from "./NftExploreCardImg";
import ExploreCardText from "./NftExploreCardText";
import ListTime from "./NftListTime";

const ExploreCard = ({imageUrl, nftBid, nftHarga, nftName, timeImg, time, title}) => {
  return (
    <a href="#" className="explore-card">
    <div>
      <ExploreCardImg imageUrl={imageUrl} />
      <ExploreCardText 
      nftName ={nftName}
      nftHarga ={nftHarga}
      nftBid ={nftBid}
      />
      <ListTime
      timeImg ={timeImg}
      time = {time}
      title = {title}
      /> 
    </div>
    </a>

  );
};

export default ExploreCard;
