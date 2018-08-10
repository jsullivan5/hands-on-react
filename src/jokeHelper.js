export const getJokeArr = (inp) => {
  let promiseArray = [];
  for (let i = 1; i < inp; i++) {
    const url = 'https://api.chucknorris.io/jokes/random'
    promiseArray.push(fetch(url).then(response => response.json()));
  }
  return Promise.all(promiseArray);
}
