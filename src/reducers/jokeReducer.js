export const jokes = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOKES':
      return action.payload;
    case 'UPVOTE_JOKE':
      const newState = [...state];
      return upvoteJoke(newState, action.payload);
    default:
      return state;
  }
};

function upvoteJoke(state, joke) {
  const index = state.indexOf(joke);

  if (state[index].voteCount) {
    state[index].voteCount++
  } else {
    state[index].voteCount = 1;
  }
  return state;
}
