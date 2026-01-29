const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const port = process.env.PORT
const morgan = require('morgan')



// console.log(process.env)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('PORT:', process.env.PORT)
console.log('USERNAME:', process.env.USERNAME)
console.log('PASSWORD:', process.env.PASSWORD)


const studentsRouters = require('./router/students')
const usersRouters = require('./router/users')

app.use(express.json());

// 3rd party middleware
app.use(morgan('dev'))

app.use(express.static('./public'))

app.use('/api/v1/students', studentsRouters)
app.use('/api/v1/users', usersRouters)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})