const express = require('express')

const app = express();
const port = 8080

app.get('/hello', (req, res) => {
    res.status(200).send("Hello world")
})

app.post('/customer', (req, res) => {
    res.status(200).json({ firstname: "Alice", age: 30 })
})


app.listen(port, () => {
    console.log("Server is running on Port 8080")
})