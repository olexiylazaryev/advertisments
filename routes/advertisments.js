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

router.put('/adv', (req, res) => {
    res.send('Create an add');
})

// TODO: add GET /adv/:id route

// TODO: add POST /adv route

// TODO: add GET /adv/owner route

router.delete('/adv/:id', (req, res) => {
    res.send('Delete an add by id');
})

module.exports = router;