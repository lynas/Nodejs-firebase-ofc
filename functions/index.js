const functions = require('firebase-functions');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secureRouter = express.Router();

app.use('/secure', secureRouter);
process.env.SECRET_KEY = "mysecretkey";

// router config starts
const authRouter = require('./controller/AuthenticateController');
app.get('/api/auth', authRouter.authenticate);

const authUserRouter = require('./controller/AuthUserController');
app.get('/api/auth_user', authUserRouter.getAllUsers);
app.post('/api/auth_user', authUserRouter.createAuthUser);
// router config starts



exports.app = functions.https.onRequest(app);
