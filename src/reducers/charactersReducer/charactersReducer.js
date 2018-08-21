import { SET_CHARACTERS, UPVOTE_CHARACTER } from '../../actions/constants';

const upvoteCharacter = (state, character) => {
  const newState = [...state];
  const index = newState.indexOf(character);

  if (newState[index].voteCount) {
    newState[index].voteCount += 1;
  }
  else {
    newState[index].voteCount = 1;
  }
  return newState.sort((a, b) => a.voteCount < b.voteCount);
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.payload;
    case UPVOTE_CHARACTER:
      return upvoteCharacter(state, action.payload);
    default:
      return state;
  }
};
