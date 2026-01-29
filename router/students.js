const express = require('express')
const router = express.Router()
const fs = require('fs')
const studentService = require('../service/studentService')

const {
    getStudents,
    createStudents,
    getStudentsWithParam,
    updateStudent,
    deleteStudents
} = studentService

// best practice
router.route('/')
    .get(getStudents).post(createStudents)

router.route('/:id')
    .get(getStudentsWithParam).patch(updateStudent).delete(deleteStudents)


module.exports = router;



// better practice

// app.get('/api/v1/students', getStudents)

// app.post('/api/v1/students', createStudents)

// app.get('/api/v1/students/:id', getStudentsWithParam)

// app.patch('/api/v1/students/:id', updateStudent)

// app.delete('/api/v1/students/:id', deleteStudents)





