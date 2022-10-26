const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

console.log(port);
