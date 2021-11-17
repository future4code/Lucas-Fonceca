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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'txai'}
          fotoUsuario={'https://picsum.photos/id/1005/50/50'}
          fotoPost={'https://picsum.photos/id/1012/200/150'}
        />
        <Post
          nomeUsuario={'iris'}
          fotoUsuario={'https://picsum.photos/id/1011/50/50'}
          fotoPost={'https://picsum.photos/id/1015/200/150'}
        />
        
      </MainContainer>
    );
  }
}



export default App;
