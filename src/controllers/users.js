const { User } = require('../../models/users.js');

const getUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.send({ data: users })
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const { name, lastname, phone, email } = req.body
        const newUser = await User.create({
            name, lastname, phone, email
        })
        res.send({ data: newUser })
    } catch (error) {
        console.error(error)
    }
}

const deleteUser = (req, res) => {
    res.send('DELETE USER')
}

const patchUser = (req, res) => {
    res.send('PATCH USER')
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    patchUser
}