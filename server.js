const express = require('express')
const app = express()
const port = 8080
const morgan = require('morgan')

const studentsRouters = require('./router/students')
const usersRouters = require('./router/users')

app.use(express.json());

// 3rd party middleware
app.use(morgan('dev'))

app.use(express.static('./public'))

app.use('/api/v1/students', studentsRouters)
app.use('/api/v1/users', usersRouters)



app.listen(port, () => {
    console.log("Server is running on port 8080")
})