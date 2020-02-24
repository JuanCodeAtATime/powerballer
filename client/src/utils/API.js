import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPbNum: function () {
    return axios.get("https://data.ny.gov/resource/d6yy-54nr.json");
  }

};



// POWERBALL API
// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32
