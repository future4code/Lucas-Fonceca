import styled from 'styled-components';
import React from 'react';

   const InputNome = styled.input`
   width: 20%;
   height: 30px;
   font-weight: bold;
 `

export class Usuario extends React.Component{

 

    state = {
        nomeDoUsuario: ''
    }

    onChangeNomeDoUsuario = (event) => {
        this.setState({nomeDoUsuario: event.target.value})

    }

    render () {
        return <InputNome
            placeholder={'Nome'}
            value={this.state.nomeDoUsuario}
            onChange={this.onChangeNomeDoUsuario}
        />

    }
}   