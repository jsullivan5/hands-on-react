import { connect } from 'react-redux';
import { upvoteCharacter, getCharacters } from '../actions';
import App from './App';

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = dispatch => ({
  upvoteCharacter: character => dispatch(upvoteCharacter(character)),
  getCharacters: () => dispatch(getCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
