import React from "react";
import NavbarExpolore from "./NftExploreNavbar";
import ExploreCard from "./NftExploreCard";
import "../style/explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <NavbarExpolore />
      <div className="explore-container">
        <ExploreCard
          imageUrl="Image/nft (1).png"
          nftName="Fish"
          nftHarga="0.5 ETH"
          nftBid="1 ETH"
          timeImg="Image/clock.png"
          time="3 days left"
          title="Photography"
        />
        <ExploreCard
          imageUrl="Image/nft (2).png"
          nftName="Dark Blue"
          nftHarga="0.7 ETH"
          nftBid="1.1 ETH"
          timeImg="Image/clock.png"
          time="1 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (3).png"
          nftName="Train"
          nftHarga="0.5 ETH"
          nftBid="1 ETH"
          timeImg="Image/clock.png"
          time="6 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (4).png"
          nftName="Beach"
          nftHarga="0.5 ETH"
          nftBid="1 ETH"
          timeImg="Image/clock.png"
          time="3 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (5).png"
          nftName="Fog"
          nftHarga="0.5 ETH"
          nftBid="1.6 ETH"
          timeImg="Image/clock.png"
          time="1 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (6).png"
          nftName="Big Tree"
          nftHarga="0.5 ETH"
          nftBid="0.5 ETH"
          timeImg="Image/clock.png"
          time="4 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (7).png"
          nftName="Silent Mountain"
          nftHarga="0.5 ETH"
          nftBid="2 ETH"
          timeImg="Image/clock.png"
          time="7 days left"
          title="Photography"
        />

        <ExploreCard
          imageUrl="Image/nft (8).png"
          nftName="City Lights"
          nftHarga="0.5 ETH"
          nftBid="1.4 ETH"
          timeImg="Image/clock.png"
          time="1 days left"
          title="Photography"
        />
      </div>
    </div>
  );
};

export default Explore;
