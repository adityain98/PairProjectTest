const User = require('../models').User
const bcrypt = require('bcrypt')

class UserController{
    static registerUser(req, res){
        res.render('registration_form')
    }

    static postRegisterUser(req, res){
        // create user
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err.message)
            })
    }

    static login(req, res) {
        // res.send('halo')
        res.render('login_form', {login: req.session.user})
    }

    static postLogin(req, res) {
        User.findOne({where: {email: req.body.email}})
        .then(user => {
            // console.log('ini dari login');
            // res.send(user)
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {id: user.id}
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = UserController