import React, { Component } from 'react';
import logo from './logo.svg';
import JokeList from '../JokeList/JokeList';
import './App.css';


class App extends Component {
  state = {
    jokes: [],
  }

  componentDidMount() {
    this.props.getJokes(5);
  }

  render() {
    const { jokes, upvoteJoke } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <JokeList
            jokes={jokes}
            upvoteJoke={upvoteJoke}
          />
      </div>
    );
  }
}

export default App;
