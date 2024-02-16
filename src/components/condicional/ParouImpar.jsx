import React from "react";
import numeros from '../../datas/parImpar'

export default props => {
    function isPar() {
        return numeros.map((numero, i) => {
            return (
                <div>
                    {numero.numero % 2 == 0 ?
                        <span>{numero.numero} é Par</span> :
                        <span>{numero.numero} é Impar</span>}
                </div>
            )
        })
    }

    return (
        <div>
            {isPar()}
        </div>
    )
}