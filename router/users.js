const express = require('express')
const router = express.Router()
const userService = require('../service/userService')

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    checkID2
} = userService


router.route('/')
    .get(getAllUsers).post(createUser)

router.route('/:id')
    .get(checkID2, getUserById).patch(updateUserById).delete(deleteUserById)

module.exports = router;