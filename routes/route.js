const express = require("express");

const router = express.Router();
const {
    getSomething,
    postSomething
} = require('../controllers/controller');

router.route('/').get(getSomething).post(postSomething);

module.exports = router;