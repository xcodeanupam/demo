const router = require('express').Router();
require('../config/passport');
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/contact', require('./contactus'));
router.use('/alltest', require('./alltest'));
router.use('/questions', require('./questions'));
router.use('/results', require('./results'));
router.use('/categoryproducts', require('./categoryproducts'));
router.use('/blogs', require('./blog'));


module.exports = router;
