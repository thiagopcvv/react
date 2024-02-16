import React from "react";
import produtos from '../../datas/produtos'
import '../../table.css'

export default props => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? "par" : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td> R$ {produto.preco} </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}