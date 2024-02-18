import React from "react";

const Numeros = (props) => {
    const numeros = props.numeros;

    return (
        <div>
            <p>Números sorteados:</p>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
    );
}

export default Numeros;
