import React from "react";
import Numeros from "./Numeros";
import Form from "./Form";

class Mega extends React.Component {

    state = {
        qtde: this.props.num1 || 6,
        numerosSorteados: [],
        numeroSelecionado: []
    }

    setQtde = (novo) => {
        this.setState({
            qtde: novo
        });
    }

    gerarMega = (qtde) => {
        const ns = []

        for (let i = 1; i <= qtde; i++) {
            let n = parseInt(Math.random() * 60) + 1
            if (!ns.includes(n)) {
                ns.push(n);
            } else {
                i--
            }

        }
         this.setState({numerosSorteados: ns})
        return ns
    }

    confirmarSelecao = () => {
        const numeroSelecionado = this.gerarMega(this.state.qtde);
        this.setState({numeroSelecionado})
    }

    componentDidMount() {
        this.gerarMega(this.state.qtde)
    }


    render() {
        return (
            
            <div>
                Mega
                <div>
                   <Form numero={this.state.qtde} setQtde={this.setQtde} confirmarSelecao={this.confirmarSelecao}></Form>
                     <Numeros numeros={this.state.numeroSelecionado}></Numeros>
                </div>
            </div>
        )
    }
}

export default Mega
