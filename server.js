const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');


//Passport Middleware
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);
require("dotenv").config();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);


// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
console.log('~~~~~~~' + db + '~~~~~~~~~~~~~~')
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }


// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

