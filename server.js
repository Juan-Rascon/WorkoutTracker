const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const api = require("./routes/api_routes");
const html_routes = require("./routes/html_routes");

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});


//Create instance of express
const app = express();

//Routes
app.use('/api', api);
app.use('/', html_routes);

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

