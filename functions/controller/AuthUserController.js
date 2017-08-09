const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = firebase.initializeApp(functions.config().firebase);
const uuidv1 = require('uuid/v1');

function getAuthUserNodeRoot() {
    const ref = firebaseApp.database().ref('auth_user');
    return ref.once('value').then(snap => snap.val());
}


function addAuthUser() {
    const user_id = uuidv1();
    const ref = firebaseApp.database().ref('auth_user');
    const userInfo = {
        "id": user_id,
        "username": "sazzad2",
        "password": "[a$06$KDIFlcJDtQOfPnLp/Llwt..UNP6HzrsIZ2CP81/OehgO5zMZcdbGu2"
    };
    // ref.push(userInfo, function (err, data) {
    //     if (err) {
    //         return {
    //             success : false
    //         }
    //     }
    //     return {
    //         success: true,
    //         data : data
    //     }
    // });



    ref.child(user_id).set(userInfo, function (err, data) {
        if (err) {
            return {
                success : false
            }
        }
        return {
            success: true,
            data : data
        }
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