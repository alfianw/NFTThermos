import React from "react";

const TendingCardImg =(props)=>{
    return(
        <div className="tending-card__img">
            <img src={props.imageUrl} alt="NFT"/>
        </div>
    );
}

export default TendingCardImg;