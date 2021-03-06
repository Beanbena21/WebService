const express = require('express');
const route = express.Router();
const verify = require('../routes/verifyToken')
const userController = require('../app/controllers/UserController')

//Login and Sign in
route.post('/users/register', userController.registerUser)
route.post('/users/login', userController.loginUser)

//test token
route.get('/users/data', verify, userController.fetchData)

//API
route.get('/users', verify, userController.listAll)
route.get('/users/:id', userController.listOne)
route.post('/users', userController.createUser)
route.put('/users/:id', userController.updateUser)
route.delete('/users/:id', userController.deleteUser)
module.exports = route