import React from "react";
import TendingNavbar from "./NftTendingNavbar";
import TendingCard from "./NftTendingCard";
import "../style/tending.css";

const NftTending = () => {
  return (
    <div className="tending">
      <TendingNavbar />

      <div className="tending-card-container">
        <TendingCard
          imageUrl="Image/karya1.png"
          nftName="Burn"
          nftHarga="0.5 ETH"
          nftBid="1 ETH"
          timeImg="Image/clock.png"
          time="2 days left"
          title="Abstract"
        />
        <TendingCard
          imageUrl="Image/karya2.png"
          nftName="People"
          nftHarga="0.5 ETH"
          nftBid="1.5 ETH"
          timeImg="Image/clock.png"
          time="2 days left"
          title="Abstract"
        />
        <TendingCard
          imageUrl="Image/karya3.png"
          nftName="Warning"
          nftHarga="0.5 ETH"
          nftBid="0.5 ETH"
          timeImg="Image/clock.png"
          time="2 days left"
          title="Abstract"
        />
      </div>
    </div>
  );
};

export default NftTending;
