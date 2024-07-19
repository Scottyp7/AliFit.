const app = require('./app')

// Connects to mongo DB on request. App.js uesd to connect for test purposes. 
require("./dbConnect.js")

// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

