import React from 'react';

const CharacterList = ({ characters, upvoteCharacter }) => {
  return characters.length ?
    characters
      .map(character => {
        return (
          <div
            key={character.name}
            style={{ border: '1px solid black' }}
            onClick={() => upvoteCharacter(character)}
          >
            <p>{character.name}</p>
            <p>{character.voteCount}</p>
          </div>
        );
      }
    )
  :
  <p>...Loading</p>
}

export default CharacterList;
