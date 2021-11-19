import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = { 
    perfis: [
      {
        nomeUsuario: 'anna flavia',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'lucas txai',
        fotoUsuario: 'https://picsum.photos/id/1005/50/50',
        fotoPost: 'https://picsum.photos/id/1012/200/150' 
      },
      {
        nomeUsuario: 'iris',
        fotoUsuario: 'https://picsum.photos/id/1011/50/50',
        fotoPost: 'https://picsum.photos/id/1015/200/150'  
      }

    ]
  }

  render() {
    const listaDePerfis = this.state.perfis.map((perfil) =>
    {
    return (
      <div>
        <img src={perfil.fotoUsuario} alt='foto de perfil do usuario' />
        {perfil.nomeUsuario}
        <img src={perfil.fotoPost} alt='foto do post' />
      </div>
    );
    });
    return (
      <MainContainer>
        <div>{listaDePerfis}</div>
      </MainContainer>
    );
  }
}



export default App;
