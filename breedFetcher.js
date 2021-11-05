const userInput = process.argv.slice(2);
const search = userInput[0].toLowerCase();

const request = require('request');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

request(URL, (error, response, body) => {
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    console.log('error: ', error);
    throw new Error('Something went wrong!', error);
  }

  const data = JSON.parse(body);
  const breed = data[0];
  // console.log('data: ', data);
  // console.log(typeof data);

  if (!breed) {
    console.log(`Breed Not Found`);
    return `Breed Not Found`;
  }

  if (breed) {
    console.log(breed.description);
  }
});

