import React from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";
import { CharacterListContainer } from "./styled";
import { PageContainer } from "./styled";


export default class CharacterListPage extends React.Component {
    state = {
        characterList: [],
    }

    componentDidMount (){
        this.getCharacterList()
    }

    getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
        .then((response)=> 
            this.setState({ characterList: response.data.results }))
        .catch((error)=> 
            console.log(error.response))
    }

 

    render () {
        const renderedCharacterList = this.state.characterList.map((character) => {
            return (
                <CharacterListContainer>
                    <p key={character.url}>{character.name}</p>
                </CharacterListContainer>
            )
        });
        return ( 
            <PageContainer>
                {renderedCharacterList}
            </PageContainer>
        )
    }   
}
