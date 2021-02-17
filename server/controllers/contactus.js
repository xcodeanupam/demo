const router = require('express').Router();
const Contactus = require('../models/contactus');
const auth = require('../middleware/auth');


router.post('/contactus', (req, res) => {
    const conntactus = new Contactus(req.body);
    try {
        conntactus.save()
        res.send(conntactus)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/addqoute', (req, res) => {
    const conntactus = new Contactus(req.body);
    try {
        conntactus.save()
        res.send(conntactus)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;
