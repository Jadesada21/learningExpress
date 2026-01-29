const userService = require('../service/userService')

const getAllUsers = async (req, res) => {
    try {
        let response = await userService.getAllUsersService()
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: response.rows })
        } else {
            res.status(200).json({ status: "Fail", data: "Data not found" })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message })
    }
}

const createUser = async (req, res) => {
    // check input value ก่อนจะส่งไปให้ service
    const { firstname, lastname, email, city, job } = req.body

    if (!firstname || !lastname || !email || !city || !job) {
        return res.status(400).json({ status: "error", message: 'missing require fields' })
    }

    try {
        let response = await userService.createUserService(req.body)

        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: "Insert data success" })
        } else {
            res.status(400).json({ status: "Failed", data: "Insert data Failed" })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        let response = await userService.getUserByIdService(id)
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: response.rows[0] })
        } else {
            res.status(200).json({ status: "Failed", data: "Data not found" })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message })
    }
}

const updateUserById = async (req, res) => {
    const { id } = req.params
    try {
        let response = await userService.updateUserByIdService(id, req.body)
        console.log(response)
        if (response.rowCount > 0) {
            res.status(200).json({ status: "success", data: "Update data Success" })
        } else {
            res.status(200).json({ status: "Failed", data: "Update failed" })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message })
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params
    try {
        const rowCount = await userService.deleteUserByIdService(id);
        if (rowCount > 0) {
            res.status(200).json({ status: "success", data: "Delete data success" })
        } else {
            res.status(200).json({ status: "Failed", data: "Delete data Failed" })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}