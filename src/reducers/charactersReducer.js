export const characters = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return action.payload;
    case 'UPVOTE_CHARACTER':
      const newState = [...state];
      return upvoteCharacter(newState, action.payload);
    default:
      return state;
  }
};

function upvoteCharacter(state, character) {
  const index = state.indexOf(character);

  if (state[index].voteCount) {
    state[index].voteCount++
  } else {
    state[index].voteCount = 1;
  }
  return state.sort((a, b) => a.voteCount < b.voteCount);
}
