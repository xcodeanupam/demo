'user strict';

const router = require('express').Router();
const User = require('../models/user');
const auth = require('../middleware/authfire');
const firebase = require("../config/firebase");
const async = require('async');



router.post('/register', async (req, res) => {
    console.log('console', req.body.name);
    if (!req.body.email || !req.body.password) {
        return res.json({
            email: 'email is required',
            password: 'password is required',
        });
    }
    console.log('reached backend', req.body.email);

    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then((data) => {

            const user = new User();
            user.email = req.body.email;
            user.password = req.body.password;
            user.name = req.body.name;

            // user.setPassword(req.body.password);
            try {
                user.save()
                data.user.sendEmailVerification().then(function () {
                    // Email sent.
                }).catch(function (error) {
                    // An error happened.
                    return res.status(403).json(error);
                });
                res.send(user.toAuthJSON())
            } catch (error) {
                res.status(500).send(error)
            }
        })
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log('error', errorMessage);
                return res.status(403).json(errorMessage);
            } else {
                return res.status(403).json(errorMessage);
            }
        });
});


router.post('/login', (req, res) => {
    console.log('user', req.body );

    if (!req.body.email || !req.body.password) {
        return res.json({
            email: 'email is required',
            password: 'password is required'
        });
    }
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            // console.log('user logged in ', user);
            return res.status(200).json(user);
        })
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                console.log('user pass', errorMessage);

                return res.status(403).json(errorMessage);
            } else {
                console.log('user', errorMessage);
                return res.status(403).json(errorMessage);
            }
        });
});



router.get('/verifyemail', (req, res) => {
    firebase.auth().currentUser.sendEmailVerification()
        .then(function () {
            return res.status(200).json({ status: 'Email Verification Sent!' })
        })
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/too-many-requests') {
                return res.status(403).json(errorMessage);
            }
        });
});


router.get('/currentuser', auth, async (req, res) => {
    try {
        console.log('reached backend')
        console.log('requested email', req.payload.email)
        const user = await User.find({email: req.payload.email})
        console.log('user is', user)
        res.send(user)
    } catch (error) {
        console.log('error is', error)
        res.status(500).send()
    }
});


router.get('/users', auth, (req, res) => {
    User.getUsers(function (err, user) {
        if (err) {
            return res.status(403).send(err);
        }
        res.send(user);
    });
});




router.post('/addblog', auth, (req, res) => {
    const blog = new Blog(req.body);
    try {
         blog.save()
        res.send(blog)
    } catch (error) {
        res.status(500).send(error)
    }
});


router.post('/blogs', async (req, res) =>{
    try {
        const blog =  await Blog.find()
        console.log('blog is', blog)
        res.send(blog)
    } catch (error) {
        res.status(500).send()
    }
});



module.exports = router;