const express = require('express')
const router = express.Router()
const userService = require('../service/userService')

const { getAllUsers, createUser, getUserById, updateUserById, deleteUserById }
    = userService

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)

module.exports = router;