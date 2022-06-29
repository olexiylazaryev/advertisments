const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Express get request.');
})

router.get('/users', (req, res) => {
    res.send('Express users get request.');
})

router.get('/advs', (req, res) => {
    res.send('add1; add2; add3;');
})

// TODO: add PUT /adv route

// TODO: add GET /adv/:id route

// TODO: add POST /adv route

// TODO: add GET /adv/owner route

// TODO: add DELETE /adv/:id route

module.exports = router;