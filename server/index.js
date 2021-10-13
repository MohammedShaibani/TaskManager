const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Moemoemoe12!",
    database: "taskmanagement"
});

app.post("/create", (req, res) => {
    const task = req.body.task;
    const assignedTo = req.body.assignedTo;

    db.query("INSERT INTO tasks (task, assigned_to) VALUES (?, ?)", 
    [task, assignedTo], (err, result) => {
        if (err) console.log(err);
        else res.send("Values inserted successfully");
    }
    );
});

app.listen(3001, () => {
    console.log('server online');
});

