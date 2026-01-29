const express = require('express')
const fs = require('fs')

const app = express();
const port = 8080

// ใช้ express ในการอนุญาติที่จะส่ง json เข้ามา
app.use(express.json())


app.delete('/api/v1/students/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
    res.status(200).json({ status: "success", data: "Delete Successfully" })
})


app.listen(port, () => {
    console.log("Server is running on Port 8080")
})









