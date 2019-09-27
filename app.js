const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const Book = require('./models').Book
const Category = require('./models').Category


const userRoutes = require('./Routes/userRoutes')
const bookRoutes = require('./Routes/bookRoutes')
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    let booksData = null
    Book.findAll({
        include: Category
    })
        .then(books=>{
            for(let i = 0; i<books.length; i++){
                books[i].setDataValue('shortDescription', books[i].shortDescription())
            }
            booksData = books
            return Category.findAll()
        })
        .then(categories=>{
            
            // res.send(categories)
            // res.send(booksData)
            res.render('index', {books: booksData, categories, login: req.session.user})
        })
})

app.get('/:categoryId', (req,res)=>{
    let category = ''
    Category.findByPk(req.params.categoryId,{
        include: Book
    })
        .then(categoryData=>{
            for(let i = 0; i<categoryData.Books.length; i++){
                categoryData.Books[i].setDataValue('shortDescription', categoryData.Books[i].shortDescription())
            }
            category = categoryData
            return Category.findAll()
        })
        .then(categories=>{
            res.render('index', {books: category.Books, categories, login: req.session.user})
        })
})

app.use('/user', userRoutes)

app.use('/book', bookRoutes)

app.listen(port, ()=>{
    console.log('listening on port 4000');
})