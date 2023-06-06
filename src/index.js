const express = require('express');
const dbConnect = require('./config/database');
const routes = require('./routes');

const app = express();

require('./config/handlebars')(app);

app.use('/static', express.static('public'));

// всяка POST заявка минава през "urlencoded", което е "middleware" на "express" и парсва данните в обект, който достъпваме в "req.body" 
app.use(express.urlencoded({ extended: false }));

// ПРИ ВСИЧКИ ЗАЯВКИ ИЗПОЛЗВАЙ ТОЗИ РУТЕР
app.use(routes);

dbConnect()
    .then(() => {
        console.log('Database is connected successfuly');
        app.listen(5000, () => console.log(`App is listening on port 5000`));

    })
    .catch(err => console.log('Database error: ', err.message));


