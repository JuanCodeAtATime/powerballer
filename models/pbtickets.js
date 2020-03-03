// powerball database code goes here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  control: { type: Number, required: true },
  num1: { type: Number, required: true },
  num2: { type: Number, required: true },
  num3: { type: Number, required: true },
  num4: { type: Number, required: true },
  num5: { type: Number, required: true },
  powerball: {type: Number, required: true},
  winningState: {String, required: false},
  date: { type: Date, default: Date.now },
  jackpotAmt: {type: Number, required: true}, 
  prizeAmt: {type: Number, required: true},
  control:{type: String, required: true}
});

const Numbers = mongoose.model("Numbers", bookSchema);