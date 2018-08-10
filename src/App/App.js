import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterList from '../CharacterList/CharacterList';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { characters, upvoteCharacter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <CharacterList
            characters={characters}
            upvoteCharacter={upvoteCharacter}
          />
      </div>
    );
  }
}

export default App;
