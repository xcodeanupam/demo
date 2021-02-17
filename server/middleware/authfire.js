const base64 = require('base64url');
const admin = require("./../config/admin");

const auth = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Authorization' ||
            req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            let user = '';
            const token = req.headers.authorization.split(' ')[1];
            const payloadInBase64 = token.split('.')[1];
            const tokenDecode = base64.decode(payloadInBase64);
            const parseToken = JSON.parse(tokenDecode);
            if (!parseToken.user_id) {
                return res.status(401).send({ error: 'token invalid' })
            }
            await admin.auth().getUser(parseToken.user_id)
                .then(function (userRecord) {
                    user = userRecord;
                })
                .catch(function (error) {
                    return res.status(401).send({ error: 'token invalid' })
                });
            req.payload = user;
            next()
        } else {
            return res.status(401).send({ error: 'Please authenticate!' })
        }
    } catch (error) {
        return res.status(401).send({ error: 'Please authenticate!' })
    }
}

module.exports = auth