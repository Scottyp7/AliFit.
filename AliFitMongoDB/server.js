const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();
require("./dbConnect.js")

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())


let userRoutes = require('./routes/userRoutes.js');
app.use('/user', userRoutes);

    app.get("/", (req, res) => {
        res.json({ message: "Welcome to myMongoDB application." });
    });


// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

