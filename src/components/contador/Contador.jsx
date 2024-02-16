import React from "react";
import './contador.css'
import Display from "./Display";
import Botoes from "./Botoes";
import Form from "./Form";

class Contador extends React.Component {

    state = {
        numero: this.props.num1 || 0,
        passo: this.props.passo1 || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    }

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <Form passo={this.state.passo} setPasso={this.setPasso}></Form>
                <Botoes incrementar={this.incrementar} dec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador