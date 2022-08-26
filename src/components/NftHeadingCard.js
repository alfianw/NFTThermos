import React from "react";
import NftHeadingText from "./NftHeadingText";
import NftHeadingButton from "./NftHeadingButton";
import NftHeadingContent from "./NftHeadingContent";
const NftHeadingCard = () => {
  return (
    <div className="nft-heading__card">
      <NftHeadingText />
      <NftHeadingContent />
      <NftHeadingButton/>
    </div>
  );
};

export default NftHeadingCard;
