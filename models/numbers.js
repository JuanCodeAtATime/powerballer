// powerball database code goes here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    no1: { type: String, required: true },
    no2: { type: String, required: true },
    no3: { type: String, required: true },
    no4: { type: String, required: true },
    no5: { type: String, required: true },
    powerball: { type: String, required: true },
    date: { type: Date, default: Date.now }

});

const Numbers = mongoose.model("Numbers", numberSchema);

module.exports = Numbers;