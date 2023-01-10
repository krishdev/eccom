const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

// Config .env file
dotenv.config({
  path: path.join(__dirname, `env/${process.env.NODE_ENV}.env`),
});

// Initialize express app
const app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(expressLayouts);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('layout', 'main-layout');
app.set("layout extractScripts", true);

// Router index
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || null;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} using ${ENV} env.`);
});
