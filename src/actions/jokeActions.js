export const setCharacters = characters => ({
  type: 'SET_CHARACTERS',
  payload: characters,
});

export const upvoteCharacter = joke => ({
  type: 'UPVOTE_CHARACTER',
  payload: joke,
});

export const getCharacters = () => dispatch =>
  fetch(`https://swapi.co/api/people`)
    .then(response => response.json())
    .then(characters => {
      const { results } = characters;
      results.forEach(character => Object.assign(character, { voteCount: 0 }));
      dispatch(setCharacters(results));
    })
    .catch(error => console.error(error));
