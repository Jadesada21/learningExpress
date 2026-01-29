const express = require('express')
const fs = require('fs')

const app = express();
const port = 8080

// ใช้ express ในการอนุญาติที่จะส่ง json เข้ามา
app.use(express.json())

let data = JSON.parse(fs.readFileSync('./students.txt', 'utf-8'))

app.patch('/api/v1/students/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ status: "Fail", message: "bad request" })
    }

    res.status(200).json({ status: "Success", data: "Update successfully" })
})




app.listen(port, () => {
    console.log("Server is running on Port 8080")
})









