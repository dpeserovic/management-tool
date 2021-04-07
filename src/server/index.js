const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: 'password', database: 'management-tool' })

app.get('/api/get/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/create/user', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const companyId = req.body.companyId;
    connection.query('INSERT INTO users (email, password, companyId) VALUES (?,?,?)', [email, password, companyId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/companies', (req, res) => {
    connection.query('SELECT * FROM companies', (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/create/company', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const address = req.body.address;
    const city = req.body.city;
    connection.query('INSERT INTO companies (id, email, password, name, address, city) VALUES (?,?,?,?,?,?)', [id, email, password, name, address, city], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/categories', (req, res) => {
    connection.query('SELECT * FROM categories', (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/create/category', (req, res) => {
    const type = req.body.type;
    const companyId = req.body.companyId;
    connection.query('INSERT INTO categories (type, companyId) VALUES (?,?)', [type, companyId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/create/item', (req, res) => {
    const name = req.body.name;
    const categoryId = req.body.categoryId;
    connection.query('INSERT INTO items (name, categoryId) VALUES (?,?)', [name, categoryId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.listen(port, () => {
    console.log("Running server on port " + port);
})