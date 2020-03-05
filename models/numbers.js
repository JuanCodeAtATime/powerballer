// powerball database code goes here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    no1: { type: Number, required: true },
    no2: { type: Number, required: true },
    no3: { type: Number, required: true },
    no4: { type: Number, required: true },
    no5: { type: Number, required: true },
    powerball: { type: Number, required: true },
    date: { type: Date, default: Date.now }

});

const Numbers = mongoose.model("Numbers", numberSchema);

module.exports = Numbers;