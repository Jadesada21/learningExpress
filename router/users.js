const express = require('express')
const router = express.Router()
const userController = require('../controller/usersController')

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
} = userController


router.route('/')
    .get(getAllUsers).post(createUser)

router.route('/:id')
    .get(getUserById).patch(updateUserById).delete(deleteUserById)

module.exports = router;