const router = require('express').Router();
const Questions = require('../models/questions');


router.post('/test', async (req, res) => {
    try {
        const questions = await Questions.find({$and: [{number: req.body.number}, {testname: req.body.testname}]})
        res.send(questions)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
