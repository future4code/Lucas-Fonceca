import styled from 'styled-components';
import React from 'react';


    const InputTexto = styled.input`
  width: 50%;  
  height: 30px;

`

export class InputMensagem extends React.Component{

 

    state = {
        mensagemDoUsuario: ''
    }

    onChangeMensagemDoUsuario = (event) => {
        this.setState({mensagemDoUsuario: event.target.value})

    }

    render () {
        return <InputTexto
            placeholder={'Mensagem'}
            value={this.state.mensagemDoUsuario}
            onChange={this.onChangeMensagemDoUsuario}
        />
        
    }
}   