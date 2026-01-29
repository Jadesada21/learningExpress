const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const { Pool } = require('pg')


const pool = new Pool({
    // user: "neondb_owner",
    // host: "ep-delicate-night-a1f1rioj-pooler.ap-southeast-1.aws.neon.tech",
    // database: "neondb",
    // password: "npg_8WkuhYnFVb2v",
    // port: "5432",

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,

    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = pool

