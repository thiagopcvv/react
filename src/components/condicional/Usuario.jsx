import React from "react";
import If, { Else } from './if'

export default (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <strong>{usuario.nome}</strong>
                <Else>
                    Usuário não logado!
                </Else>
            </If>
        </div>
    );
};