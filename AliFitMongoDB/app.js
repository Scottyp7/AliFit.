const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())


let userRoutes = require('./routes/userRoutes.js');
app.use('/user', userRoutes);

    app.get("/", (req, res) => {
        res.json({ message: "Welcome to myMongoDB application." });
    });

module.exports = app