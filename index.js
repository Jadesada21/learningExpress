const express = require('express')
const fs = require('fs')

const app = express();
const port = 8080

// ใช้ express ในการอนุญาติที่จะส่ง json เข้ามา
app.use(express.json())

let data = JSON.parse(fs.readFileSync('./students.txt', 'utf-8'))

app.get('/api/v1/students', (req, res) => {
    res.status(200).json({ status: "sucess", data: data })
})


app.post('/api/v1/students', (req, res) => {
    let body = req.body
    console.log(body)
    let respone = data.filter((e) => e.Name == body.name)
    res.status(200).json(respone)
})




app.listen(port, () => {
    console.log("Server is running on Port 8080")
})






