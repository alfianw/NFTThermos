import React from "react";

const ExploreCardImg =(props)=>{
    return(
        <div className="explore-card__img">
            <img src={props.imageUrl} alt="NFT"/>
        </div>
    );
}

export default ExploreCardImg;