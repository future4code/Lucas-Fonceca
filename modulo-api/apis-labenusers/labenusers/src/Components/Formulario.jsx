import React from "react";
import axios from 'axios';


class CadastroUsuarios extends React.Component {
    state = {
        nomeUsuarios: "",
        emailUsuario: ""
    }

    criarUsuarios = () => {
        const body = {
            name: this.state.nomeUsuarios,
            email: this.state.emailUsuario
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "lucas-txai-joy"
            }
        }).then((resposta) => {
            <li>{resposta.data}</li>
        }).catch((error) => {
            console.log(error.data)
        });
    };

    onChangeCadastroUsuarios = (event) => {
        this.setState ({nomeUsuarios: event.target.value});
    };

    onChangeCadastroEmail = (event) => {
        this.setState ({emailUsuario: event.target.value});
    };

    render () {
        return (
            <div>
                <button>Trocar de tela</button> <br />
                <input placeholder="Nome" value={this.state.nomeUsuarios} onChange={this.onChangeCadastroUsuarios}></input>
                <input placeholder="Email" value={this.state.emailUsuario} onChange={this.onChangeCadastroEmail}></input>
                <button onClick={this.criarUsuarios}>Criar usuário</button>
            </div>
        )
    }
}

export default CadastroUsuarios