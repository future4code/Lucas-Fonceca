import React from "react";
import axios from "axios";
import CadastroUsuarios from "./Formulario";

class ListaDeUsuarios extends React.Component {
    state = {
        listaDeUsuarios: []
    };

    componentDidMount = () => {
        this.pegarListaDeUsuarios()
    };

    pegarListaDeUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "lucas-txai-joy"
            }
        }).then((resposta) => {
            this.setState({listaDeUsuarios: resposta.data.result.list })
        }).catch((err) => {
            console.log(err.message)
        });
    };
    render () {
        const listaDeUsuariosRenderizada = this.state.listaDeUsuarios.map((usuario) => {
            return <p>usuario.name</p>
        });
    return (
        <div>
            {listaDeUsuariosRenderizada}
        </div>
    )
    }
}