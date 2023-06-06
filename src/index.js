const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const app = express();

app.use('/static', express.static('public'));

// всяка POST заявка минава през "urlencoded", което е "middleware" на "express" и парсва данните в обект, който достъпваме в "req.body" 
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// ПРИ ВСИЧКИ ЗАЯВКИ ИЗПОЛЗВАЙ ТОЗИ РУТЕР
app.use(routes);

app.listen(5000, () => console.log(`App is listening on port 5000`));
