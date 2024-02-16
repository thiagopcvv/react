import React, {cloneElement} from "react";

export default props => {

    return(
        <div>
           {
            props.children.map(el => {
                return cloneElement(el, {...props, key: 1 })
            })
           }
        </div>
    )
}