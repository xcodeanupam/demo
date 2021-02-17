const router = require('express').Router();
const Alltest = require('../models/alltest');
const auth = require('../middleware/auth');


router.post('/addtest', (req, res) => {
    const alltest = new Alltest(req.body);
    try {
        alltest.save()
        res.send(alltest)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/list', async (req, res) => {
    try {
        const alltest = await Alltest.find()
        res.send(alltest)
    } catch (error) {
        res.status(500).send()
    }
});

router.post('/testbycategory', async (req, res) => {
    try {
        console.log('reach api', req.body)
        const alltest = await Alltest.find({categoryname: req.body.categoryname})
        res.send(alltest)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
