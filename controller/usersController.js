const User = require('../models/user');
// const db = require("../models");

module.exports = {
    create: async (req, res) => {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password
        })

        return res.send(user)
    },

    find: async (req, res) => {
        const user = await User.find()
        return res.send(user)
    },
    numbersByUser: async (req, res) => {
        const { id } = req.params;
        const user = await User.findById(id).populate('numbers');

        res.send(user.numbers);
    }
}
