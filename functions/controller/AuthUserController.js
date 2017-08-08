const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = firebase.initializeApp(functions.config().firebase);


function getAuthUserNodeRoot() {
    const ref = firebaseApp.database().ref('auth_user');
    return ref.once('value').then(snap => snap.val());
}


function addAuthUser() {
    const ref = firebaseApp.database().ref('auth_user');
    return ref.set({
        "username": "sazzad2",
        "password": "[a$06$KDIFlcJDtQOfPnLp/Llwt..UNP6HzrsIZ2CP81/OehgO5zMZcdbGu2"
    });
}

module.exports.getAllUsers = function (req, resp) {
    const ref = firebaseApp.database().ref('auth_user');
    return resp.json(ref.once('value').then(snap => snap.val()));
};

module.exports.createAuthUser = function (req, res) {
    getAuthUserNodeRoot().then(facts => {
        res.setHeader('Content-Type', 'application/json');
        res.json(addAuthUser());
    });
};