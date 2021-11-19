import './App.css';
import styled from 'styled-components';
import { Usuario } from './components/Usuario.js';
import { InputMensagem } from './components/InputMensagem.js';

const WrapApp = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const CaixaEnvelope = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 99vh;
  border: 2px solid #000;
  background-color: #CCC;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`

const BotaoEnviar = styled.button`
  width: 20%;
  height: 36px;
`

function App() {
  return (
    <WrapApp>
      <CaixaEnvelope>
        <Usuario/>
        <InputMensagem/>
        <BotaoEnviar>{"Enviar"}</BotaoEnviar>
      </CaixaEnvelope>
    </WrapApp>
  );
}

export default App;
