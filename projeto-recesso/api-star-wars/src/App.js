import React from "react";
import CharacterDetailPage from "./components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./components/CharacterListPage/CharacterListPage";


export default class App extends React.Component {
  
  state = {
    currentPage: "list"
  }

  selectPage = () => {
    switch (this.state.currentPage){
      case "list":
        return <CharacterListPage />
      case "detail":
        return <CharacterDetailPage />
      default:
        return <CharacterListPage />
    }
  }

  goToDetailPage = () => {
      this.setState = "detail"
  }


  render (){
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}
