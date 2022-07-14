import React from 'react';


class Mensagens extends React.Component {
    state= {
        arrayDeMensagens: [
            {
                nomeUsuario: "",
                mensagem: ""
            }
        ],
        valorInputNome: "",
        valorInputMensagem: ""
    };


    adicionaMensagem = () => {
        const novaMensagem = {
            nomeUsuario: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        };

        const novasMensagens = [...this.state.arrayDeMensagens, novaMensagem];

        this.setState({arrayDeMensagens: novasMensagens});
        this.setState({ valorInputMensagem: ""});
    }

    onChangeInputNome = (event) => {
        this.setState({valorInputNome: event.target.value});
    };

    onChangeInputMensagem = (event) => {
        this.setState ({valorInputMensagem: event.target.value});
    };
    render() {
        const listaDeComponentes = this.state.arrayDeMensagens.map((message) => {
            return (
                <p><b>{message.nomeUsuario} </b>{message.mensagem}</p>
            );

            
            
        }); 
        return (
            <div>
                <div>{listaDeComponentes}</div>
                <div>
                    <input
                    value={this.state.valorInputNome}
                    onChange={this.onChangeInputNome}
                    placeholder={"Nome"}
                    />
                    <input
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default Mensagens