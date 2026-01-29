const pool = require('../db/pool.js')

const getAllUsersService = async () => {
    try {
        let sql = 'SELECT * from public.customers'
        let response = await pool.query(sql)
        console.log(response)
        return response
    } catch (err) {
        console.error('getallusersservice error:', err)
        throw err
    }
}


const createUserService = async (body) => {
    try {
        let sql = `INSERT INTO public.customers
    (firstname, lastname, email, city, job)
    VALUES($1 , $2 , $3 , $4 , $5);`
        let response = await pool.query(sql, [
            body.firstname,
            body.lastname,
            body.email,
            body.city,
            body.job
        ])
        console.log(response)
        return response
    } catch (err) {
        console.error('createUserService error:', err)
        throw err
    }
}


const getUserByIdService = async (id) => {
    try {
        let sql = 'SELECT * FROM public.customers WHERE customerid = $1'
        let response = await pool.query(sql, [id])
        console.log(response)
        return response
    } catch (err) {
        console.error('getUserByIdService error:', err)
        throw err
    }
}


const updateUserByIdService = async (id, body) => {
    try {
        let sql = `update customers
    set firstname = $1 , lastname = $2 , email = $3 , city = $4 , job = $5
    where customerID = $6`
        let response = await pool.query(sql, [
            body.firstname,
            body.lastname,
            body.email,
            body.city,
            body.job,
            id
        ])
        console.log(response)
        return response
    } catch (err) {
        console.error('updateUserByIdService error:', err)
        throw err
    }

}

const deleteUserByIdService = async (id) => {
    try {
        let sql = `delete from customers where customerID = $1`
        let response = await pool.query(sql, [id])
        console.log(response)
        return response.rowCount
    } catch (err) {
        console.error('updateUserByIdService error:', err)
        throw err
    }

}

const checkID2 = (req, res, next,) => {
    if (Number(req.params.id) <= 0) {
        res.status(400).json({ status: "success", data: "Bad Request" })
    }
    next()
}

module.exports = {
    getAllUsersService,
    createUserService,
    getUserByIdService,
    updateUserByIdService,
    deleteUserByIdService,
    checkID2
};