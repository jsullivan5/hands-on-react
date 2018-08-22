import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters, upvoteCharacter }) => (
  <Fragment>
    {characters.length ? (
      characters.map(character => (
        <div
          className="character-card"
          key={character.name}
          style={{ border: '1px solid black' }}
          onClick={() => upvoteCharacter(character)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              upvoteCharacter(character);
            }
          }}
          role="button"
          tabIndex="0"
        >
          <p>{character.name}</p>
          <p>{character.voteCount}</p>
        </div>
      ))
    ) : (
      <p>...Loading</p>
    )}
  </Fragment>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  upvoteCharacter: PropTypes.func.isRequired,
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
