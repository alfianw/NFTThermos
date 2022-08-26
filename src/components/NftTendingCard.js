import React from "react";
import TendingCardImg from "./NftTendingCardImg";
import TendingCardText from "./NftTendingCardText";
import ListTime from "./NftListTime";

const TendingCard = ({imageUrl, nftBid, nftHarga, nftName, timeImg, time, title}) => {
  return (
    <a href="#" className="tending-card">
      <div >
        <TendingCardImg imageUrl={imageUrl} />
        <TendingCardText 
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

export default TendingCard;
