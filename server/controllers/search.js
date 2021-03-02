const router = require('express').Router();
const Search = require('../models/search');



router.post('/add', (req, res) => {
    const search = new Search(req.body);
    try {
        search.save()
        res.send(search)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getSearch', async (req, res) => {
    try {
        console.log('sadasd', req.body.title)
        const search = await Search.find()
        console.log('sdf',search)
        res.send(search)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
