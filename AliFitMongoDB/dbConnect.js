'use strict';

const Mongoose = require('mongoose');

// if the connection fails, try 127.0.0.1 instead of localhost below
// CHANGE ALI FIT AFTER THE / ON THE LINE 7 AND ALSO IN THE .ENV FILE.
const uri = process.env.DB_URI || "mongodb+srv://scottparker960:1scotty7@cluster0.58yjf5x.mongodb.net/AliFit";

// Connect to MongoDB
Mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log('MongoDB Error:' + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification ofconnection errors)
db.on("error", console.error.bind(console, "MongoDBconnection error: "));
exports.Mongoose = Mongoose;