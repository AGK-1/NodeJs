const jwt = require("jsonwebtoken");
const config = require("../config");

const encodePayload = (payload) => {
    let token = jwt.sign(payload, config.jwtSecret, {expiresIn: 86400});
    return token;

}

const decodePayload = (token) => {
    try {
    let payload = jwt.verify(token, config.jwtSecret);
    return payload;
    } catch {
        return false;
    }
}

module.exports = {
    encodePayload,
    decodePayload,

}