const path = require('path');
const { default: axios } = require('axios');

const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();

router.get('/add-user', userController.getAddUser);

router.get('/users', userController.getUsers);

router.get('/user/:userId', userController.getUser);

router.post('/add-user', userController.postAddUser);

router.post('/delete-user', userController.postDeleteUser);

module.exports = router;
