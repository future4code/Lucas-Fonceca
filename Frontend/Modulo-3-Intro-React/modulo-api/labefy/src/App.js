import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BackgroundApp = styled.div `
  background-color: #90d2d8;
  width: 100%;
  overflow: hidden;  
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerPlaylists = styled.div `
  width: 520px;
  height: 250px;
  background-color: #ffecb8;
  border: 5px solid #ffecb8;
  border-radius: 10px;
  box-shadow: -10px 0px 13px -7px #f7c297, 10px 0px 13px -7px #f7c297, 0px 0px 5px 5px rgba(193,205,205,0);
  margin: 200px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
`

const Playlists = styled.div `
  width: 220px;
  height: 30px;
  background-color: #f6a6b2;
  border-radius: 10px;
  text-align: center;
`

const PlaylistAnterior = styled.button `
  width: fit-content;
  background-color: #f7c297;
  margin-right: 13px;
`
const ProximaPlaylist = styled.button `
  width: fit-content;
  background-color: #f7c297;
  margin-left: 13px;
`

const NovaPlaylistBotao = styled.button `
  background-color: #f7c297;
  align-self: center;
  justify-self: center;
`
class App extends React.Component {
  render (){
    return (
      <BackgroundApp>
        <ContainerPlaylists>
          <PlaylistAnterior>{"< Playlist anterior"}</PlaylistAnterior>
          <Playlists>
            {"Playlist 1"}
          </Playlists>
          <ProximaPlaylist>{"Próxima Playlist >"}</ProximaPlaylist>
          <NovaPlaylistBotao>{"Criar Nova Playlist"}</NovaPlaylistBotao>
        </ContainerPlaylists>
      </BackgroundApp>
    );
  }
}
export default App;
