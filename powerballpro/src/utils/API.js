import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

// POWERBALL API
// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32
