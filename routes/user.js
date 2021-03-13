const express = require('express');
const route = express.Router();
const userController = require('../app/controllers/UserController')

//Login and Sign in
route.post('/users/register', userController.registerUser)
route.post('/users/login', userController.loginUser)
//API
route.get('/users', userController.listAll)
route.get('/users/:id', userController.listOne)
route.post('/users', userController.createUser)
route.put('/users/:id', userController.updateUser)
route.delete('/users/:id', userController.deleteUser)
module.exports = route