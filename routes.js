const express = require("express");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");
const db = require("./models");
require("./config/passport")(passport);
// Load input validation
const validateRegisterInput = require("./validation/register");
const validateLoginInput = require("./validation/login");



// @route POST api/register
// @desc Register user
// @access Public
router.post("/api/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    db.Users.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new Users({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/api/login", function (req, res) {

    // generate a signed son web token with the contents of user object and return it in the response

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    db.Users.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});



router.get("/api/numbers",
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
        // console.log("This is the res in th get numbers get route ..... " + res)
        db.Users.find({ _id: req.user._id })
            .populate('numbers')
            .then(function (dbNumbers) {
                res.json(dbNumbers);
                // console.log(dbNumbers);
                // console.log(req.user._id)
            })
            .catch(function (err) {
                res.json(err);
            });

    });


router.post("/api/numbers",
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
        // console.log(req.body.gameNo + " This is the req.body.numbers[0] Ln 129");
        db.Numbers.create(req.body)
            .then(function (dbNumbers) {
                return db.Users.findOneAndUpdate({ _id: req.user._id }, { $push: { numbers: dbNumbers._id } })
            })
            .then(function (dbUser) {
                console.log(dbUser + " This is the dbUser on ln 114")
                res.json(dbUser)
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });


router.delete("/api/numbers/:id",
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
        db.Numbers.deleteOne({ _id: req.params.id }).then(res => {
            console.log(req.params.id),
                db.Users.findOneAndUpdate({ _id: req.user._id }, { $unset: { numbers: 1 } })
        })
            .then(res => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            }
            )
        console.log("Numbers record has been deleted")
    });



router.get('/', function (req, res) {
    req.logout();
    console.log('logged out');
    res.redirect('/');
})



module.exports = router;







