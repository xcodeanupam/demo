const router = require('express').Router();
const Results = require('../models/results');



router.post('/starttest', (req, res) => {
    const results = new Results(req.body);
    try {
        results.save()
        res.send(results)
    } catch (error) {
        res.status(500).send(error)
    }
});




router.post('/get', async (req, res) => {
    try {
        const results = await Results.find({result_id: req.body.result_id})
        res.send(results)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
