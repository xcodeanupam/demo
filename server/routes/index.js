const router = require('express').Router();

router.use('/api', require('../controllers'));

router.get('*', function (req, res) {
    res.sendfile('dist/index.html');
});

module.exports = router;
