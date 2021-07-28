const { Router } = require('express');
const router = Router();
const {getUsers, createUser, deleteUsers} = require('../controllers/user.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUsers)

module.exports = router;