const userModel = require("../models/user.model");
const { encodePayload } = require("../utils/jwt.utils");
const bcrypt = require("bcrypt");
const register = async (params) => {
    let exitsUser = await userModel.findOne({
        $or: [
            {
                username: params.username,
            },
            {
                email: params.email,
            },
        ]
    });
    if (exitsUser) {
        throw new Error("Username or email has already existing")
    }
    let user = new userModel(params);
    await user.save();
    return user;
}

const login = async (params) => {
    let user = await userModel.findOne({
        username: params.username,
    });

    if (!user) throw new Error("User or password is wrong");

    // if (!user.password == params.password) throw new Error("User or password is wrong");

    let checkPassword = bcrypt.compare(params.password, user.password)
    
    if(!checkPassword){throw new Error("User or password is wrong");}
    token = encodePayload({ userId: user._id });
    return { token, user };

}


const authService = {
    register,
    login,
}

module.exports = authService;