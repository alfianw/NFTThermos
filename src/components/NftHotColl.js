import React from "react";
import HotCollNavbar from "./NftHotCollNabar";
import HotCollCard from "./NftHotCollCard";
import "../style/hotcoll.css"

const HotColl = () => {
  return (
    <div className="hotcoll">
      <HotCollNavbar />
      <div className="hotcoll-card-container">
        <HotCollCard 
            wallImg="Image/wall1.png" 
            profileImg="Image/profile1.png" 
            user="Ahmad Nuril Huda" 
            items="137 total items" />
        <HotCollCard 
            wallImg="Image/wall2.png" 
            profileImg="Image/profile2.png" 
            user="Sukaidi Jamal" 
            items="321 total items" />
        <HotCollCard 
            wallImg="Image/wall3.png" 
            profileImg="Image/profile3.png" 
            user="Sukirman Mantap" 
            items="133 total items" />
        <HotCollCard 
            wallImg="Image/wall4.png" 
            profileImg="Image/profile4.png" 
            user="Saben Dina" 
            items="221 total items" />                                    
      </div>
    </div>
  );
};

export default HotColl;
