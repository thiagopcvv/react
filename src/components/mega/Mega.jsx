import React from "react";
import megas from '../../datas/mega'

class Mega extends React.Component {


    state = {
        qtde: this.props.num1 || 7,
    }

    setPasso = (novo) => {
        this.setState({
            passo: novo
        });

    gerarMega = (qtde) => {
        let ns = []

        for (let i = 0; i <= qtde; i++) {
            let n = parseInt(Math.random() * 60) + 1
            if (!ns.includes(n)) {
                ns.push(n);
            } else {

            }

        }

        return ns

    }

    render() {
        return (
            <div>
                Mega
                <div>
                    <label htmlFor="">Digite a quantidade de número sorteados</label>
                    <input type="number" value={this.state.qtde} onChange={e => props.setPasso(+e.target.value)} />
                    <p>{this.props.ns}</p>
                </div>
            </div>
        )
    }
}

export default Mega