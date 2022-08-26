import React from "react";
import HotCollCardImg from "./NftHotCollCardImg";
import HotCollCardText from "./NftHotCollCardText";

const HotCollCard = ({ wallImg, profileImg, user, items }) => {
  return (
    <a href="#" className="hotcoll-card">
    <div>
      <HotCollCardImg wallImg={wallImg} profileImg={profileImg} />
      <HotCollCardText user={user} items={items} />
    </div>
    </a>
  );
};

export default HotCollCard;
