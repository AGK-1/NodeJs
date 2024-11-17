const config = require("./config");
require("./config/database");

const express = require('express');
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => res.json({message: "Application is running"}));
app.use('/api', router);


app.listen(config.port, () => {
    console.log(`application is running - http://localhost:${config.port}`);
});


