import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CharacterList } from '../components';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {
  static propTypes = {
    getCharacters: PropTypes.func.isRequired,
    upvoteCharacter: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = { characters: [] };

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
