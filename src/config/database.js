const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/rubik-cube';

async function dbConnect() {
    await mongoose.connect(connectionString);
}

module.exports = dbConnect;

// todo...