const pool = require('../db/pool.js')

const getAllUsers = async (req, res) => {
    let sql = 'SELECT * from public.customers'
    let response = await pool.query(sql)
    console.log(response)
    if (response.rowCount > 0) {
        res.status(200).json({ status: "success", data: response.rows })
    } else {
        res.status(200).json({ status: "Fail", data: "Data not found" })
    }
}


const createUser = async (req, res) => {
    let body = req.body
    console.log(body)
    let sql = `INSERT INTO public.customers
    (firstname, lastname, email, city, job)
    VALUES('${body.firstname}', '${body.lastname}', '${body.email}', '${body.city}', '${body.job}');`
    console.log(sql);
    let response = await pool.query(sql)
    console.log(response)
    if (response.rowCount > 0) {
        res.status(200).json({ status: "success", data: "Insert data success" })
    } else {
        res.status(400).json({ status: "Failed", data: "Insert data Failed" })
    }
}


const getUserById = async (req, res) => {
    let { id } = req.params
    let sql = 'SELECT * FROM public.customers WHERE customerid = $1'
    let response = await pool.query(sql, [id])
    console.log(response)
    if (response.rowCount > 0) {
        res.status(200).json({ status: "success", data: response.rows[0] })
    } else {
        res.status(200).json({ status: "Failed", data: "Data not found" })
    }

}

const updateUserById = async (req, res) => {
    let { id } = req.params
    let body = req.body
    let sql = `update customers
    set firstname = $1 , lastname = $2 , email = $3 , city = $4 , job = $5
    where customerID = $6`
    let response = await pool.query(sql, [body.firstname, body.lastname, body.email, body.city, body.job, id])
    console.log(response)
    if (response.rowCount > 0) {
        res.status(200).json({ status: "success", data: "Update data Success" })
    } else {
        res.status(200).json({ status: "Failed", data: "Update failed" })
    }
}

const deleteUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not defined" })
}

const checkID2 = (req, res, next,) => {
    if (Number(req.params.id) <= 0) {
        res.status(400).json({ status: "success", data: "Bad Request" })
    }
    next()
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    checkID2
};