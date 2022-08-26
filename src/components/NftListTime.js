import React from "react";

const ListTime =(props)=>{
return(
    <div className="list-time">
        <div className="time">
            <img src={props.timeImg} alt=""/>
            <p>{props.time}</p>
        </div>
        <p>{props.title}</p>
    </div>
);
}

export default ListTime;