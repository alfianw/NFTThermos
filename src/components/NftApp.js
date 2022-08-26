import React from "react";
import NftNavbar from "./NftNavbar";
import NftHeading from "./NftHeading";
import NftTending from "./NftTending";
import HotColl from "./NftHotColl";
import Explore from "./NftExplore";
import Footer from "./NftFooter";

const NftApp =()=>{

    return(
        <div className="nftapp">
            <NftNavbar/>
            <NftHeading/>
            <NftTending/>
            <HotColl/>
            <Explore/>
            <Footer/>
        </div>
    )
}

export default NftApp;