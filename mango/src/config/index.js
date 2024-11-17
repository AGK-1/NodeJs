const path = require("path");
const dotenv = require("dotenv");

const envPath = path.join(__dirname, "../../.env");

dotenv.config({path: envPath});

module.exports = {
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URL,
};





