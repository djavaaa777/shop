const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DATABASE------OK");
    }
});

module.exports = conn;
