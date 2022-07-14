import logo from './logo.svg';
import './App.css';
import PaginaInicial from './Componentes/EtapaGeral';
import SemSuperior from './Componentes/EtapaSemSuperior';
import EnsinoSuperior from './Componentes/EtapaEnsSuperior';
import PaginaFinal from './Componentes/EtapaFinal';
import React from 'react';
import styled from 'styled-components';

let Botao = styled.button`
  margin: 15px auto;
`

export default class App extends React.Component {
  
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <PaginaInicial />;
      case 2:
        return <EnsinoSuperior />;
      case 3:
        return <SemSuperior />;
      case 4:
        return <PaginaFinal />;      
      default:
        break;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }


  render () {
      return (
        <div className="App">
          {this.renderizaEtapa()}
          {this.state.etapa < 4 && <Botao onClick={this.irParaProximaEtapa}>{"Próxima Etapa"}</Botao>}


        </div>
      );
    }
}
