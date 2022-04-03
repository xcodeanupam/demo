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


router.post('/addcasting', async (req, res) => {
    try {
        // const ldr = req.body.movie_id
        // // const lead_id = ldr
        const data = {
            casting: req.body.casting
        }
        const movie = await Movie.findOneAndUpdate({ 'movie_id': req.body.movie_id }, data, { new: true });
        res.send(movie)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/addcomments', async (req, res) => {
    try {
        // const ldr = req.body.movie_id
        // // const lead_id = ldr
        const data = {
            comments: req.body.comments
        }
        const movie = await Movie.findOneAndUpdate({ 'movie_id': req.body.movie_id }, data, { new: true });
        res.send(movie)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getALlMovie', async (req, res) => {
    try {
        // console.log('sadasd', req.body.title)
        const movie = await Movie.find().sort({ movie_id: -1 })
        res.send(movie)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});




module.exports = router;
