import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPbNum: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://data.ny.gov/resource/d6yy-54nr.json");
  },

  loadPbData: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://www.powerball.com/api/v1/estimates/powerball?_format=json");
  },

  loadChartData: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32");
  },
  getNumbers: function () {
    return axios.get("/api/routes/numbers");
  },
  // Gets the powerball number with the given id
  getNumber: function (id) {
    return axios.get("/api/routes/numbers/" + id);
  },
  // Deletes the powerball number with the given id
  deleteNumber: function (id) {
    return axios.delete("/api/routes/numbers/" + id);
  },
  // Saves apowerball number to the database
  saveNumber: function (numberData) {
    return axios.post("/api/routes/numbers", numberData);
  },
};






// POWERBALL API
// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32
