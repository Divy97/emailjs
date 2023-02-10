const express = require("express");
const app = express();

require("dotenv").config();

const bodyParsers = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
