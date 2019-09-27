
'use strict';

const nodemailer = require('nodemailer');

function mailSender(email){
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'magnanimouslib@gmail.com',
            pass: 'magnanimoushacktiv'
        }
    })
    
    let message = {
        from: 'magnanimouslib@gmail.com',
        to: email,
        subject: 'Order Processed',
        text: 'We have received your order, we will notify you again when we ship your order'
    }
    
    
    transport.sendMail(message, (err, info)=>{
    })

}

module.exports = mailSender