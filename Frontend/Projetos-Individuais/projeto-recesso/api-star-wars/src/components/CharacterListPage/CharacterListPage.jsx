import React from "react";
import { CharacterListContainer } from "./styled";
import { PageContainer } from "./styled";
import { getCharacterList } from "../../services/requests";


export default class CharacterListPage extends React.Component {
    state = {
        characterList: [],
    }

    componentDidMount (){
        getCharacterList(this.saveCharacter)
    }

    saveCharacter = (data) => {
        this.setState({characterList: data})
    }


 

    render () {
        const renderedCharacterList = this.state.characterList.map((character) => {
            return (
                <CharacterListContainer>
                    <p 
                        key={character.url}
                        onClick={()=> this.props.goToDetailPage(character.url)}
                    >
                        {character.name}
                    </p>
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
