// db.js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "CarlosGPC",
    password: "12345",
    database: "blog",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;
