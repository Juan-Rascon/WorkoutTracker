const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const api = require("./routes/api_routes");
const html_routes = require("./routes/html_routes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

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


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
