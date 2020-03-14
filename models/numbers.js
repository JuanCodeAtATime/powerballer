const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    gameNo: {
        type: String,
        required: false
        // required: '{PATH} is required!'

    },
    no1: { type: String, required: true },
    no2: { type: String, required: true },
    no3: { type: String, required: true },
    no4: { type: String, required: true },
    no5: { type: String, required: true },
    powerball: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: { type: Date, default: Date.now }

});

const Numbers = mongoose.model("Numbers", numberSchema);

module.exports = Numbers;


