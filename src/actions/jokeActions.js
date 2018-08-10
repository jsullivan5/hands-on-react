export const getJokeArr = (inp) => {
  let promiseArray = [];
  for (let i = 1; i < inp; i++) {
    const url = 'https://api.chucknorris.io/jokes/random'
    promiseArray.push(fetch(url).then(response => response.json()));
  }
  return Promise.all(promiseArray);
}


export const setjokes = jokes => ({
  type: 'SET_JOKES',
  payload: jokes,
});

export const upvoteJoke = joke => ({
  type: 'UPVOTE_JOKE',
  payload: joke,
});

export const getJokes = jokeNumber => dispatch =>
  getJokeArr(jokeNumber)
    .then(jokeList => {
      jokeList.forEach(joke => Object.assign(joke, { voteCount: 0 }));
      dispatch(setjokes(jokeList));
    })
    .catch(error => console.error(error));


// export const migrateUser = data => dispatch => {
//   dispatch(loadingUser());
//   return userService
//     .enroll(data)
//     .then(() =>
//       dispatch(
//         loginUser(
//           { username: data.email, password: data.password },
//           '/accept-terms'
//         )
//       )
//     )
//     .catch(error => dispatch(userRegistrationFailure(error)));
// };
