import { connect } from 'react-redux';
import { getJokes, upvoteJoke } from '../actions';
import App from './App';

const mapStateToProps = ({ jokes }) => ({
  jokes,
});

const mapDispatchToProps = dispatch => ({
  getJokes: jokeNum => dispatch(getJokes(jokeNum)),
  upvoteJoke: joke => dispatch(upvoteJoke(joke)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
