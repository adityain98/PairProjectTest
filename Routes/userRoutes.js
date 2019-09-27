const express = require('express')
const routes = express.Router()

const UserController = require('../Controllers/userController')


routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// register
// routes.get('/', UserController.registerUser)

// post register
// routes.post('/', UserController.postRegisterUser)

routes.get('/signup', UserController.registerUser)

routes.post('/signup', UserController.postRegisterUser)

routes.get('/login', UserController.login)

routes.post('/login', UserController.postLogin)

routes.get('/logout', UserController.logout)

module.exports = routes