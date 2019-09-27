const express = require('express')
const routes = express.Router()

const BookController = require('../Controllers/bookController')
const session = require('express-session');

const loginSession = (req,res,next) => {
    if(req.session.user) {
        next()
    } else {
        res.redirect('/user/login');
    }
}

routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


routes.get('/:id/addBook', loginSession, BookController.addBook)

// routes.post('/:id/addBook', BookController.postAddBook)

routes.get('/cart', loginSession, BookController.cart)

routes.get('/checkout', BookController.checkout)

routes.get('/cart/:idBook/delete', BookController.delete)

routes.get('/emptycart', BookController.deleteList)


module.exports = routes