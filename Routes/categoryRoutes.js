const express = require('express')
const routes = express.Router()

const CaetgoryController = require('../Controllers/caetgoryController')


routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-

