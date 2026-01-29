const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const port = process.env.PORT
const morgan = require('morgan')

const errors = require('./utils/errors')
console.log('PORT:', process.env.PORT)


const studentsRouters = require('./router/students')
const usersRouters = require('./router/users')

app.use(express.json());

// 3rd party middleware
app.use(morgan('dev'))

app.use(express.static('./public'))

app.use('/api/v1/students', studentsRouters)
app.use('/api/v1/users', usersRouters)

app.use('/:path', (req, res, next) => {
    // res.status(404).json({
    //     status: "Fail",
    //     data: `Path ${req.originalUrl} not found in the server`
    // })
    const err = new Error(`Path ${req.originalUrl}not found in the server `)
    err.status = 'Fail'
    err.statusCode = 404
    next(err)
})

app.use(errors.ApiError)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})