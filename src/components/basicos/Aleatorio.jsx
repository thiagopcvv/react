import React from "react";

export default props => {
    const {num1, num2} = props
    
    const random = parseInt(Math.random() * (num1 - num2)) + num2

    return (
        <div>
            <p>Numero aleatório: {random}</p>
        </div>
    )
}