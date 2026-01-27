const express = require('express')
const fs = require('fs')

const app = express();
const port = 8080

// app.get('/hello', (req, res) => {
//     res.status(200).send("Hello world")
// })

// app.post('/customer', (req, res) => {
//     res.status(200).json({ firstname: "Alice", age: 30 })
// })

let data = JSON.parse(fs.readFileSync('./students.txt', 'utf-8'))

app.get('/api/v1/students', (req, res) => {
    res.status(200).json({ status: "sucess", data })
})


app.listen(port, () => {
    console.log("Server is running on Port 8080")
})