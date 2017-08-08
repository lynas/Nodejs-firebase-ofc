const jwt = require('jsonwebtoken');

module.exports.authenticate = function (req, resp) {
    const user = {
        username : "test",
        email: "mail"
    };
    const token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: 4000
    });

    resp.json({
        success : true,
        token: token
    })
};