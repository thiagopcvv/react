import React from "react";
import './Card.css'

export default props =>{

    const style ={
        backgroundColor: props.color
    }
    return(
        <div className="Card" >
            <div className="titulo" style={style}>{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}