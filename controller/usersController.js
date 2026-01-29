const userService = require('../service/userService')
const errors = require('../utils/errors')

const getAllUsers = async (req, res, next) => {
    try {
        let response = await userService.getAllUsersService()
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: response.rows })
        } else {
            res.status(200).json({ status: "Fail", data: "Data not found" })
        }
    } catch (err) {
        // res.status(500).json({ status: "error", message: err.message })
        console.log(err.message)
        errors.mapError(500, "internal server error", next)
    }
}

const createUser = async (req, res, next) => {
    // check input value ก่อนจะส่งไปให้ service
    const { firstname, lastname, email, city, job } = req.body

    if (!firstname || !lastname || !email || !city || !job) {
        // return res.status(400).json({ status: "error", message: 'missing require fields' })
        errors.mapError(404, "Missing require fields")
    }

    try {
        let response = await userService.createUserService(req.body)

        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: "Insert data success" })
        } else {
            res.status(400).json({ status: "Failed", data: "Insert data Failed" })
        }
    } catch (err) {
        // res.status(500).json({ status: "error", message: err.message })
        console.log(err.message)
        errors.mapError(500, "internal server error", next)
    }
}

const getUserById = async (req, res, next) => {
    try {
        let { id } = req.params
        id = Number(id)
        if (Number.isNaN(id)) {
            errors.mapError(404, "Request param invalid type", next)
        }
        let response = await userService.getUserByIdService(id)
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: response.rows[0] })
        } else {
            // res.status(200).json({ status: "Failed", data: "Data not found" })
            errors.mapError(404, "Find data not found", next)
        }
    } catch (err) {
        // res.status(500).json({ status: "error", message: err.message })
        console.log(err.message)
        errors.mapError(500, "internal server error", next)
    }
}

const updateUserById = async (req, res, next) => {
    try {
        let { id } = req.params
        id = Number(id)
        if (Number.isNaN(id)) {
            errors.mapError(404, "Request param invalid type", next)
        }
        let response = await userService.updateUserByIdService(id, req.body)
        console.log(response)
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: "Update data Success" })
        } else {
            res.status(200).json({ status: "Failed", data: "Update failed" })
        }
    } catch (err) {
        // res.status(500).json({ status: "error", message: err.message })
        console.log(err.message)
        errors.mapError(500, "internal server error", next)
    }
}

const deleteUserById = async (req, res, next) => {
    try {
        let { id } = req.params
        id = Number(id)
        if (Number.isNaN(id)) {
            errors.mapError(404, "Request param invalid type", next)
        }
        const rowCount = await userService.deleteUserByIdService(id);
        if (rowCount > 0) {
            res.status(200).json({ status: "success", data: "Delete data success" })
        } else {
            res.status(200).json({ status: "Failed", data: "Delete data Failed" })
        }
    } catch (err) {
        // res.status(500).json({ status: "error", message: err.message })
        console.log(err.message)
        errors.mapError(500, "internal server error", next)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}