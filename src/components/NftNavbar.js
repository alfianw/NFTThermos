import React from "react";

const NftNavbar =()=>{
    return(
<div className="navbar">
    <img src="Image/logoNft.png"alt="logo"/>
    <ul className="btn-navbar">
        <li><a href="">Market</a></li>
        <li><a href="">Activity</a></li>
        <li><a href="">Feature</a></li>
        <li id="btn-navbar__wallet"><a href="">Connect Wallet</a></li>
    </ul>
</div>
    )
}

export default NftNavbar;