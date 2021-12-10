import React from "react";

export default class PaginaInicial extends React.Component { 
    render () {
        return (
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <form>
                    <label for="nome">1. Qual seu nome?</label> <br />
                    <input type="text" id="nome" name="nome" /> <br />
                    <label for="idade">2. Qual sua idade?</label> <br />
                    <input type="text" id="idade" name="idade" /> <br />
                    <label for="email">3. Qual seu email?</label> <br />
                    <input type="email" id="email" name="email" /> <br />
                    <label for="escolaridade">4. Qual a sua escolaridade?</label> <br />
                    <input list="escolaridade" /> <br />
                    <datalist id="escolaridade">
                        <option value="Ensino Médio Incompleto"></option>
                        <option value="Ensino Médio Completo"></option>
                        <option value="Ensino Superior Incompleto"></option>
                        <option value="Ensino Superior Completo"></option>
                    </datalist>
                </form>
            </div>
        )
    }
}