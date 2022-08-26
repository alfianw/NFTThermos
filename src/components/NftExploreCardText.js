import React from "react";

const ExploreCardText = (props) =>{
    return(
        <div className="explore-card__text">
            <h1>{props.nftName}</h1>
            <h2>{props.nftHarga}</h2>
            <h3>Highest  bid : {props.nftBid}</h3>
        </div>
    );
}

export default ExploreCardText;