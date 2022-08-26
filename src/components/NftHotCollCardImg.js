import React from "react";

const HotCollCardImg =(props)=>{
    return(
        <div className="hotcoll-card__img">
            <img src={props.wallImg} id="wallImg" alt=""/>
            <img src={props.profileImg} id="profileImg" alt=""/>
        </div>
    )
}

export default HotCollCardImg;