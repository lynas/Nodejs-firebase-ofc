const
    express = require('express'),
    router = express.Router();

router.post('/login', function (req, res) {
    res.send("do");
});

router.get('/me', function (req, res) {
    res.send("do not");
});

module.exports = router;