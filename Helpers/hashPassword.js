const crypto = require('crypto');

function hashPassword(password, secret){
    const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
    
    return hash
}

module.exports = hashPassword