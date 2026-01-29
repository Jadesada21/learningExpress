const express = require('express')
const fs = require('fs')
const morgan = require('morgan')

const app = express();
const port = 8080


app.use(express.json())
app.use(morgan('dev'))

// app.use((req, res, next) => {
//     console.log("hello from middleware")
//     next()
// })

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })

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

// better practice

// app.get('/api/v1/students', getStudents)

// app.post('/api/v1/students', createStudents)

// app.get('/api/v1/students/:id', getStudentsWithParam)

// app.patch('/api/v1/students/:id', updateStudent)

// app.delete('/api/v1/students/:id', deleteStudents)


// best practice
app.route('/api/v1/students').get(getStudents).post(createStudents)

app.route('/api/v1/students/:id').get(getStudentsWithParam)
    .patch(updateStudent).delete(deleteStudents)

//

const getAllUsers = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not Defined" })
}

const createUsers = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not Defined" })
}

const getUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not Defined" })
}

const updateUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not Defined" })
}

const deleteUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not Defined" })
}

app.route('/api/v1/users').get(getAllUsers).post(createUsers)
app.route('/api/v1/users/:id').get(getUserById).patch(updateUserById).delete(deleteUserById)


app.listen(port, () => {
    console.log("Server is running on Port 8080")
})









