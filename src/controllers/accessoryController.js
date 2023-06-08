const router = require('express').Router();

const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('accessory/create', { title: 'Create Accessory' })
});

router.post('/create', async (req, res) => {

    let requestData = req.body
    accessoryService.create(requestData);

    res.redirect('/');
});


module.exports = router;

// TODO add titles
