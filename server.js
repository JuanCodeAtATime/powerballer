const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api/routes");
const path = require("path");
const cors = require('cors');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Passport Middleware
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);
require("dotenv").config();


//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

//Use routes
app.use("/api/routes", routes)

app.use(cors());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}



