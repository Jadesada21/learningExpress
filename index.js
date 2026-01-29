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

app.get('/api/v1/students/:id', (req, res) => {
    let id = req.params.id
    let respone = data.find((e) => e.ID == id)
    if (respone) {
        res.status(200).json({ status: "success", data: respone })
    } else {
        res.status(400).json({ status: "Fail", message: "Data not found" })
    }

})




app.listen(port, () => {
    console.log("Server is running on Port 8080")
})




