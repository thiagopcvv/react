import React from "react";

import First from './components/basicos/first'
import Com from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card";
import './app.css'

// let n1 =+ prompt('Insira um número');
// let n2 =+ prompt('Insira outro número');

let n1 = 60
let n2 = 1

export default (props) => {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>

            <div className="container">
                <Card titulo="Desafio Aleatŕoio" color="#080">
                    <Aleatorio num1={n1} num2={n2}></Aleatorio>
                    <Aleatorio num1={n1} num2={n2}></Aleatorio>
                    <Aleatorio num1={n1} num2={n2}></Aleatorio>
                </Card>
                <Card titulo="Primeiro Componente">
                    <First />
                </Card>

                <Card titulo="Segundo Componente">
                    <Com title="Segundo comp" subtitulo="subLegal" nota={9} />
                </Card>
                <Card titulo="Fragmento">
                    <Fragmento />
                </Card>
            </div>
        </div>
    )
}