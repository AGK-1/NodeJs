const { Schema ,model} = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    firstName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    birthday: {
        type: Date,
    },
}, 
{ timestamps: true }
);


userSchema.pre('save', async function(next){
   if(!this.isModified('password')) return next();
   this.password = await bcrypt.hash(this.password, 10);
   next();
})

const userModel = model("User", userSchema);

module.exports = userModel;
