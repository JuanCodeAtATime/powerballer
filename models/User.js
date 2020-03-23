const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    numbers: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'numbers' }
    ]
}, {
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = User = mongoose.model("users", UserSchema);

