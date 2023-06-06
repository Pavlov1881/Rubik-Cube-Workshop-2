const router = require('express').Router();

const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    const cube = req.body;   // взимаме данните от POST заявката на CREATE формата

    // валидираме данните
    if (cube.name.length < 2) {
        res.status(400).send('Invalid request');
        return;
    }

    // запазваме на данните
    try {
        await cubeService.save(cube);  // викаме SAVE функцията от SERVICE папката и подаваме куба от заявката
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error);
    }
});

// рутер за details page
router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id)  // взимаме ид-то от параметрите на request
    res.render('details', { cube });  // взимаме конкретния куб и рендерираме детайлите му
});

module.exports = router;