import React from "react";

class Form extends React.Component {
    Mudar = (e) => {
        const novoQtde = parseInt(e.target.value);
        this.props.setQtde(novoQtde);
    }

    render() {
        return (
            <div>
                <label htmlFor="qtde">Quantidade de números: </label>
                <input type="number" id="qtde" value={this.props.numero} onChange={this.Mudar} />
                <button onClick={this.props.confirmarSelecao}>Confirmar</button>
            </div>
        );
    }
}

export default Form;
