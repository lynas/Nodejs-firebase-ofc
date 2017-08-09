const functions = require('firebase-functions');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secureRouter = express.Router();

app.use('/secure', secureRouter);
process.env.SECRET_KEY = "mysecretkey";

// router config starts
app.use(require('./controller'));



exports.app = functions.https.onRequest(app);
