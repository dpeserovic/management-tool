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
    const companyKey = req.body.companyKey;
    db.query('INSERT INTO users (email, password, companyKey) VALUES (?,?,?)', [email, password, companyKey], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Values inserted!');
        }
    })
})

app.get('/api/get/companies', (req, res) => {
    db.query('SELECT * FROM companies', (error, result) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/api/create/company', (req, res) => {
    const companyKey = req.body.key;
    const email = req.body.email;
    const password = req.body.password;
    const companyName = req.body.companyName;
    const companyAddress = req.body.companyAddress;
    const companyCity = req.body.companyCity;
    db.query('INSERT INTO companies (id, email, password, name, address, city) VALUES (?,?,?,?,?,?)', [companyKey, email, password, companyName, companyAddress, companyCity], (err, result) => {
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