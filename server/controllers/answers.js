const router = require('express').Router();
const Answers = require('../models/answers');



router.post('/add', (req, res) => {
    const answers = new Answers(req.body);
    try {
        answers.save()
        res.send(answers)
    } catch (error) {
        res.status(500).send(error)
    }
});




router.post('/getanswers', async (req, res) => {
    try {
        const answers = await Answers.find({result_id: req.body.result_id})
        res.send(answers)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
