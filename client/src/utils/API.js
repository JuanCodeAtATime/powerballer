import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPbNum: function () {
    return axios.get("https://data.ny.gov/resource/d6yy-54nr.json");
  },

  loadPbData: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://www.powerball.com/api/v1/estimates/powerball?_format=json");
  },

  loadChartData: function () {
    return axios.get("https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32");
  },
  getNumbers: function () {
    return axios.get("/api/numbers");
  },
  // Gets the book with the given id
  getNumber: function (id) {
    return axios.get("/api/numbers/" + id);
  },
  // Deletes the book with the given id
  deleteNumber: function (id) {
    return axios.delete("/api/numbers/" + id);
  },
  // Saves a book to the database
  saveNumber: function (numberData) {
    return axios.post("/api/numbers", numberData);
  }



};






// POWERBALL API
// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32
