const mongoose = require('mongoose');

// Database name: unoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/unoDB');

module.exports = mongoose.connection;
