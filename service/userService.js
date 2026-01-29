const pool = require('../db/pool.js')

const getAllUsers = async (req, res) => {
    console.log("API getAllUsers called")

    let sql = 'SELECT NOW()'
    let response = await pool.query(sql)
    console.log(response)
    res.status(200).json({ status: "success", data: "Function not defined" })
}

const createUser = async (req, res) => {
    let body = req.body
    console.log(body)
    let sql = `INSERT INTO public.customers
(customerid, firstname, lastname, email, city, job)
VALUES(${body.id}, '${body.firstname}', '${body.lastname}', '${body.email}', '${body.city}', '${body.job}');`
    console.log(sql);
    let response = await pool.query(sql)
    console.log(response)
    if (response.rowCount > 0) {
        res.status(200).json({ status: "success", data: "Insert data success" })
    } else {
        res.status(400).json({ status: "Failed", data: "Insert data Failed" })
    }


}

const getUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not defined" })
}

const updateUserById = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not defined" })
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