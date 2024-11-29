//const { String } = require('joi');
const { Schema ,model} = require('mongoose');

const postSchema = new Schema({
    userk:{
        type: String,
        required: true,
        unique: true,
    },
    mypost: {
        type: String,
        required: true,
    }
}, 
{timestamps: true}
);


const postModel = model("Post",postSchema);
module.exports = postModel;
