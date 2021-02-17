const router = require('express').Router();
const Category = require('../models/category');

router.post('/listcategory', async (req, res) => {
    try {
        const category = await Category.find()
        res.send(category)
    } catch (error) {
        res.status(500).send()
    }
});

module.exports = router;
