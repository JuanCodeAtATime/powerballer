
const db = require("../models");

// Defining methods for the numbersController
module.exports = {
    findAll: function (req, res) {
        db.Numbers
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Numbers
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.user)
        db.Numbers
            .create(req.body)
            .then(dbModel => {

                return res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Numbers
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Numbers
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};