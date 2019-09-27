const Book = require('../models').Book
const UserBook = require('../models').UserBook
const User = require('../models').User
const nodemailer = require('nodemailer');
const sendMail = require('../Helpers/nodeMailer')


class BookController{
    // tampilkan ke homepage
    static findAll(req, res){
        if(!req.query.id){
            Book.findAll()
                .then(books=>{
                    res.render('home', {books, login: req.session.user})
                })
        }
        // view book by category
        else{
            BookCategory.findAll({
                where: {
                    CategoryId: req.query.id
                },
                include: Book
            })
                .then(books=>{
                    res.render('home', {books, login: req.session.user})
                })
        }
    }

    // masukkan buku ke cart
    static addBook(req, res){
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(data=>{
                // res.send(data)
                return UserBook.create({
                    UserId: req.session.user.id,
                    BookId: req.params.id    
                })
            })
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    // menampilkan buku yang ada di cart
    static cart(req, res){
        let books = ''
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(()=>{
                return User.findByPk(req.session.user.id, {
                    include: Book
                })
            })
            .then(userBooks=>{
                // res.send(userBooks)
                res.render('invoice', {userBooks, login: req.session.user})
            })
            // test
            .catch(err=>{
                res.send(err.message)
            })
    }

    static checkout(req, res){
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(()=>{
                return User.findByPk(req.session.user.id, {
                    include: Book
                })
            })
            .then(userBooks=>{
                sendMail(userBooks.email)
                // res.send(userBooks)
                res.render('checkout_page', {userBooks, login: req.session.user})
            })
            // test
            .catch(err=>{
                res.send(err.message)
            })
    }

    static delete(req, res){
        UserBook.destroy({
            where:{
                BookId: req.params.idBook,
                UserId: req.session.user.id
            }
        })
            .then(()=>{
                res.redirect('/book/cart')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static deleteList(req, res){
        UserBook.destroy({
            where:{
                UserId: req.session.user.id
            }
        })
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = BookController