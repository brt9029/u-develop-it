const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'toast333',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});