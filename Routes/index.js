const router = require('express').Router();
const Model = require('../models/');


router.get('/user/login', (req,res) => res.render('login_form'));

router.get('/user/register', (req,res) => res.render('registration_form'));

router.get('/checkout', (req, res) => res.render('invoice'));


router.get('/checkout_page', (req, res) => res.render('checkout_page'));

module.exports =  router;