const express = require("express");
const { body, validationResult } = require('express-validator');
const { Reply, validateReply } = require("../models/replies");
const _ = require("lodash");
const Post = require("../models/Post");
const fetchPost = require("../middleware/fetchPost");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();


module.exports = router;