const { Router } = require ('express');
const router = Router();

const { getUser, createUser, deleteUser, patchUser } = require("../controllers/users.js")

router.get('/', getUser);
router.post('/', createUser);
router.patch('/', patchUser);
router.delete('/', deleteUser);


module.exports = router