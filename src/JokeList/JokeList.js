import React from 'react';

const JokeList = ({ jokes, upvoteJoke }) => {
  return jokes.length ?
    jokes
      .sort((a, b) => a.voteCount < b.voteCount)
      .map(joke => {
        return (
          <div
            key={joke.id}
            style={{ border: '1px solid black' }}
            onClick={() => upvoteJoke(joke)}
          >
            <p>{joke.value}</p>
            <p>{joke.voteCount}</p>
          </div>
        );
      }
    )
  :
  <p>...Loading</p>
}

export default JokeList;
