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