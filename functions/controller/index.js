const
    express = require('express'),
    router = express.Router();

router.use('/api/auth', require('./auth'));

module.exports = router;