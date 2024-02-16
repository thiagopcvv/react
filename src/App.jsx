import React from "react";

import First from './components/basicos/first'
import Com from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card";
import './app.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/layout/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TableProdutos"
import ParouImpar from "./components/condicional/ParouImpar";
import Usuario from "./components/condicional/Usuario";
import DiretaPai from "./components/comunicaao/DiretaPai";
import IndiretaPai from "./components/comunicacaoIndireta/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

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

                <Card titulo="Segundo Componente" color="#000">
                    <Com title="Segundo comp" subtitulo="subLegal" nota={9} />
                </Card>
                <Card titulo="Fragmento">
                    <Fragmento />
                </Card>
                <Card titulo="Familia com membro">
                    <Familia sobrenome="Pires">
                        <FamiliaMembro nome="Thiago"></FamiliaMembro>
                        <FamiliaMembro nome="Maria Clara"></FamiliaMembro>
                        <FamiliaMembro nome="Jose"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="Lista de Alunos" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Tabela produtos">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="Redenrização condicional">
                    <ParouImpar numero={20}></ParouImpar>
                    <Usuario usuario={{ nome: "Matheus" }}></Usuario>
                    <Usuario usuario={{ email: "ahaha" }}></Usuario>
                    <Usuario usuario={{ email: "ahaha" }}></Usuario>
                </Card>
                <Card titulo="Comunicação Direta">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="Comunicação Indireta">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="Componete controlado" color="#7ACCC8">
                    <Input></Input>
                </Card>
                <Card titulo='Contador' color='#424242'>
                    <Contador num1={10}></Contador>
                </Card>
                <Card titulo="Mega Sena gerador ">
                    <Mega></Mega>
                </Card>
            </div>
        </div>
    )
}