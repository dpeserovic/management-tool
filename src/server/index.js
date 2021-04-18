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

app.get('/api/get/users/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM users WHERE companyId = (?)', [companyId], (error, result) => {
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

app.get('/api/get/company/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM companies WHERE id = (?)', [companyId], (error, result) => {
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

app.get('/api/get/category/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM categories WHERE id = (?)', [id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/categories/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM categories WHERE companyId = (?)', [companyId], (error, result) => {
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

app.post('/api/edit/category/:id', (req, res) => {
    const id = req.params.id;
    const type = req.body.type;
    connection.query('UPDATE categories SET type = (?) WHERE id = (?)', [type, id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/item/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM items WHERE id = (?)', [id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/items/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM items WHERE userId IS NULL AND companyId = (?)', [companyId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/all-items/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM items WHERE companyId = (?)', [companyId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/all-taken-items/:companyId', (req, res) => {
    const companyId = req.params.companyId;
    connection.query('SELECT * FROM items WHERE UserId IS NOT NULL AND companyId = (?)', [companyId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/get/my-items/:userId', (req, res) => {
    const userId = req.params.userId;
    connection.query('SELECT * FROM items WHERE userId = (?)', [userId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/create/item', (req, res) => {
    const name = req.body.name;
    const companyId = req.body.companyId;
    const categoryId = req.body.categoryId;
    connection.query('INSERT INTO items (name, companyId, categoryId) VALUES (?,?,?)', [name, companyId, categoryId], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/edit/item/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const categoryId = req.body.categoryId;
    connection.query('UPDATE items SET name = (?), categoryId = (?) WHERE id = (?)', [name, categoryId, id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.get('/api/delete/item/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM items WHERE id = (?)', [id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/borrow/item/:id/:userId', (req, res) => {
    const id = req.params.id;
    const userId = req.params.userId;
    connection.query('UPDATE items SET userId = (?) WHERE id = (?)', [userId, id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.post('/api/return/item/:id', (req, res) => {
    const id = req.params.id;
    connection.query('UPDATE items SET userId = NULL WHERE id = (?)', [id], (error, result) => {
        error ? res.send(error) : res.send(result);
    })
})

app.listen(port, () => {
    console.log("Running server on port " + port);
})