import React, { useState } from "react";
import './input.css'

export default props => {
    const [valor, setValor] = useState('')

    function mudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}> 
                <input value={valor} onChange={mudar} placeholder="digite para mudar" />
                <input type="text" placeholder='Digite algo...' value={undefined} />
            </div>
        </div>
    )
}