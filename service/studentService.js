const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./students.txt', 'utf-8'))

const getStudents = (req, res) => {
    res.status(200).json({ status: "success", requestAt: req.requestTime, data: data })
}

const getStudentsWithParam = (req, res) => {
    let id = req.params.id
    let response = data.find((e) => e.ID == id)
    if (response) {
        res.status(200).json({ status: "success", data: response })
    } else {
        res.status(404).json({ status: "Fail", message: "data not found" })
    }
}

const createStudents = (req, res) => {
    let body = req.body
    let response = data.filter((e) => e.Name == body.name)
    res.status(200).json({ status: "success", data: response })
}

const updateStudent = (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ status: "Fail", message: "bad request" })
    }
    res.status(200).json({ status: "success", data: "Update successfully" })
}

const deleteStudents = (req, res) => {
    let id = req.params.id
    console.log(id);
    res.status(200).json({ status: "success", data: "Delete Successfully" })
}

module.exports = {
    getStudents,
    createStudents,
    getStudentsWithParam,
    updateStudent,
    deleteStudents
};
