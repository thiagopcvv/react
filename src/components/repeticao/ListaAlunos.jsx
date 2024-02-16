import React from "react";
import alunos from '../../datas/alunos'

export default props => {

    const liss = alunos.map((aluno) => {
        return (
        <li key={aluno.id}>
            {aluno.id} {aluno.nome} : {aluno.nota}

        </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {liss}
            </ul>
        </div>
    )
}