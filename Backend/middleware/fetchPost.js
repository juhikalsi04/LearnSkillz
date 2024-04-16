const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secret'

const fetchPost = (req, res, next) => {
    const token = req.header('post-token')
    if (!token) {
        res.status(401).send({ error: 'access denied' })

    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.post = data.post;
        next();
    } catch (error) {
        res.status(401).send({ error: 'access denied' })
    }
}

module.exports = fetchPost;