const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // SQL Username
        user: process.env.DB_USER,
        // SQL Password
        password: process.env.DB_PASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;