// powerball database code goes here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  drawNumber: { type: Number, required: true },
  number1: { type: Number, required: true },
  number2: { type: Number, required: true },
  number3: { type: Number, required: true },
  number4: { type: Number, required: true },
  number5: { type: Number, required: true },
  powerball: {type: Number, required: true},
  winningState: {String, required: false},
  date: { type: Date, default: Date.now },
  jackpotAmt: {type: Number, required: true}
});

const Book = mongoose.model("Book", bookSchema);