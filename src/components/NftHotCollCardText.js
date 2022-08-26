import React from "react";

const HotCollCardText = (props)=>{
    return(
        <div className="hotcoll-card__text">
            <h1>{props.user}</h1>
            <p>{props.items}</p>
        </div>
    );
}

export default HotCollCardText;