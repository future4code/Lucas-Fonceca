import React from "react";
import CharacterDetailPage from "./components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./components/CharacterListPage/CharacterListPage";


export default class App extends React.Component {
  
  state = {
    currentPage: "list",
    characterUrl: ""
  }

  goToDetailPage = (url) => {
    this.setState({currentPage: "detail", characterUrl: url})
}

  goToListPage = () => {
  this.setState({currentPage: "list", characterUrl: ""})
}


  selectPage = () => {
    switch (this.state.currentPage){
      case "list":
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
      case "detail":
        return <CharacterDetailPage goToListPage={this.goToListPage} url={this.state.characterUrl} />
      default:
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
    }
  }

  


  render (){
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}
