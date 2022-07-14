import React from "react";

export default class SemSuperior extends React.Component { 
    render () {
        return (
            <div>
                <h1>Etapa 3 - Dados Gerais</h1>
                <form>
                    <label for="naoterminou">5. Por que você não terminou um curso de graduação?</label> <br />
                    <input type="text" id="naoterminou" name="naoterminou" /> <br />
                    <label for="cursocomplementar">6. Você fez algum curso complementar?</label> <br />
                    <input list="cursocomplementar" /> <br />
                    <datalist id="cursocomplementar">
                        <option value="Curso técnico"></option>
                        <option value="Curso de inglês"></option>
                        <option value="Não fiz curso complementar"></option>
                    </datalist>
                </form>
            </div>
        )
    }
}