const router = require('express').Router();

const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('accessory/create', { title: 'Create Accessory' })
});

router.post('/create', async (req, res) => {

    accessoryService.create(req.body);

    res.redirect('/');
});


module.exports = router;