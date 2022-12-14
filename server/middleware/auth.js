const {expressjwt:jwt} = require('express-jwt');

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Authorization' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const auth = {
    required: jwt({
        secret: process.env.JWT_SECRET,
        userProperty: 'payload',
        algorithms: ['RS256'],
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret: process.env.JWT_SECRET,
        userProperty: 'payload',
        algorithms: ['RS256'],
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};



module.exports = auth;