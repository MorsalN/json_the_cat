const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  console.log('breedName: ', breedName);

  request(URL, (error, response, body) => {

    const data = JSON.parse(body);
    const breed = data[0];
    // console.log('data: ', data);
    // console.log(typeof data);
  
    if (!breed) {
      callback(`Failed to find ${breedName}`,null);
    }
  
    if (breed) {
      callback(null, breed.description);
    }
  });

};

module.exports = { fetchBreedDescription };
