const router = require('express').Router()
const cubeService = require('../services/cubeService')

// при всяка заявка към '/', отиди в index.hbs, където чрез темплейта от "partials - cube", динамично рендерира наличните кубчета
router.get('/', async (req, res) => {

    let { search, from, to } = req.query // взимаме стринга от search полето

    const cubes = await cubeService.getAll(search, from, to);    // извиква getAll от сървизите и взима всички кубове с добавени опции за търсене
    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;

// TODO add titles