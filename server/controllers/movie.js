const router = require('express').Router();
const Movie = require('../models/movie');



router.post('/addMovie', (req, res) => {
    const movie = new Movie(req.body);
    try {
        movie.save()
        res.send(movie)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getMovie', async (req, res) => {
    try {
        // console.log('sadasd', req.body.title)
        const movie = await Movie.find({titleLink: req.body.title})
        res.send(movie)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});

router.post('/getALlMovie', async (req, res) => {
    try {
        // console.log('sadasd', req.body.title)
        const movie = await Movie.find()
        res.send(movie)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
