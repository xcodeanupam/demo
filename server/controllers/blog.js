const router = require('express').Router();
const Blog = require('../models/blog');



router.post('/add', (req, res) => {
    const blog = new Blog(req.body);
    try {
        blog.save()
        res.send(blog)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/getBlog', async (req, res) => {
    try {
        console.log('sadasd', req.body.title)
        const blog = await Blog.find({title: req.body.title})
        res.send(blog)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
});


module.exports = router;
