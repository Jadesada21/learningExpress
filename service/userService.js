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

const checkID = (req, res, next, val) => {
    if (Number(val) <= 0) {
        res.status(400).json({ status: "success", data: "Bad Request" })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    checkID
};