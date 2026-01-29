const express = require('express')
const router = express.Router()


const getAllUsers = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not defined" })
}

const createUser = (req, res) => {
    res.status(200).json({ status: "success", data: "Function not defined" })
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


router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUserById).patch(updateUserById).delete(deleteUserById)

module.exports = router;