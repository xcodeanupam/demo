const router = require('express').Router();
const CategoryProduct = require('../models/categoryproduct');



router.post('/add', (req, res) => {
    const categoryProduct = new CategoryProducts(req.body);
    try {
        categoryProduct.save()
        res.send(categoryProduct)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getCategoryProducts', async (req, res) => {
    try {
        console.log('sadasd', req.body.categoryName)
        const categoryProduct = await CategoryProduct.find({categoryName: req.body.categoryName})
        res.send(categoryProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
