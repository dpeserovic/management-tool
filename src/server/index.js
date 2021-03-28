const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'management-tool'
})

app.get('/api/get/users', (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Running server on port 3001!");
})