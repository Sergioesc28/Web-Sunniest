// controllers/dbConfig.js

const mysql = require("mysql2");

const dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "dou.270905",
    port: 3306,
    database: "Sunniest"
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
