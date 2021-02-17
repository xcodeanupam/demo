const router = require('express').Router();
const CategoryProducts = require('../models/categoryproducts');



router.post('/add', (req, res) => {
    const categoryProducts = new CategoryProducts(req.body);
    try {
        categoryProducts.save()
        res.send(categoryProducts)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getCategoryProducts', async (req, res) => {
    try {
        const categoryProducts = await CategoryProducts.find({productName: req.body.productName})
        res.send(categoryProducts)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
