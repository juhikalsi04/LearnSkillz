const express = require('express')
const router = express.Router();
const Post = require('../models/Post');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';


// router.post('/', async (req, res) => {
//     let post = await Post.create({
//         title: req.body.title,
//         question: req.body.question,
//         author: req.body.author
//     })
//     res.json(post)
// })
// get all posts GET /api/discussion/post/allpost

router.get('/allpost', async (req, res) => {
    try {

        const posts = await Post.find().select();
        if (!posts) {
            return res.status(404).json({ error: 'No posts found' });
        }

        res.json(posts);
    } catch (error) {
        res.status(500).send('Server error');
    }

})

// to add post POST: /api/discussion/post/addpost
router.post('/addpost', fetchUser, [
    body('title', "this field is required").exists(),
    body('question', "this field is required").exists(),
], async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, question, tag } = req.body;
        const post = new Post({
            title, question, tag, user: req.user.id
        })
        const savedPost = await post.save()
        // res.send(savedPost)

        const data = {
            post: {
                id: post.id
            }
        }
        const postToken = jwt.sign(data, JWT_SECRET);
        res.json({ postToken, savedPost })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }
})
module.exports = router