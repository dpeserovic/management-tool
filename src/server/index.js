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

app.post('/api/create/user', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const companyId = req.body.companyId;
    const isOwner = req.body.isOwner;
    db.query('INSERT INTO users (email, password, companyId, isOwner) VALUES (?,?,?,?)', [email, password, companyId, isOwner], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Values inserted!');
        }
    })
})

app.post('/api/create/company', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const companyId = req.body.companyId;
    const isOwner = req.body.isOwner;
    db.query('INSERT INTO users (email, password, companyId, isOwner) VALUES (?,?,?,?)', [email, password, companyId, isOwner], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Values inserted!');
        }
    })
})

app.listen(3001, () => {
    console.log("Running server on port 3001!");
})