export const SET_CHARACTERS = 'SET_CHARACTERS';
export const UPVOTE_CHARACTER = 'UPVOTE_CHARACTER';

export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters
});

export const upvoteCharacter = character => ({
  type: UPVOTE_CHARACTER,
  payload: character
});

export const getCharacters = () => dispatch =>
  fetch(`https://swapi.co/api/people`)
  .then(response => response.json())
  .then(characters => {
    const { results } = characters;
    const resultsWithVote = results.map(character =>
      Object.assign(character, { voteCount: 0 })
    );
    dispatch(setCharacters(resultsWithVote));
  })
  .catch(error => console.error(error));
