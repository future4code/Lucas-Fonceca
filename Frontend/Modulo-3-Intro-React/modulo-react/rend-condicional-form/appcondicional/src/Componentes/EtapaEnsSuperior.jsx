import React from "react";

export default class EnsinoSuperior extends React.Component { 
    render () {
        return (
            <div>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <form>
                    <label for="curso">5. Qual curso?</label> <br />
                    <input type="text" id="curso" name="curso" /> <br />
                    <label for="instituicaoensino">6. Qual instituição de ensino?</label> <br />
                    <input type="text" id="instituicaoensino" name="instituicaoensino" /> <br />
                </form>
            </div>
        )
    }
}