import React from "react";
import { getCharacter } from "../../services/requests";
import { getPlanet } from "../../services/requests";

export default class CharacterDetailPage extends React.Component {
    state = {
        character: {},
        planet: ""
    }

    componentDidMount(){
        getCharacter(this.props.url, this.saveCharacter)
    }

    componentDidUpdate(prevProps, prevState){
        if (this.character !== prevState) {
            getPlanet(this.state.character.homeworld, this.savePlanet)
        }
    }

    saveCharacter = (data) => {
        this.setState({character: data})
    }


    savePlanet = (data) => {
        this.setState({planet: data})
    }





    render () {
        return ( 
            <div>
                {this.state.character.name && this.state.planet ?
                    (
                        <div>
                            <p>Nome: {this.state.character.name}</p>
                            <p>Planeta de Origem: {this.state.planet}</p>
                        </div>
                    ) : <p>Carregando...</p>
                } 
                <button onClick={this.props.goToListPage}>Voltar para lista</button>
            </div>
        )
    }
}