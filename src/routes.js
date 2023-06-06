const experss = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const router = experss.Router();

// ПРИ ВСЯКА ЗАЯВКА КЪМ "/" ИЗПОЛЗВАЙ РУТЕРА В  "homeController" 
router.use('/', homeController);


// ПРИ ВСЯКА ЗАЯВКА КЪМ "CUBE" ИЗПОЛЗВАЙ РУТЕРА В "cubeController"
router.use('/cube', cubeController);

module.exports = router;
