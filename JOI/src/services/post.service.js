const postModel = require("../models/post.model")

const postT = async (params) => {
    let post = new postModel(params);
    await post.save();
    return post;
}

const postService = {
    postT,
}

module.exports = postService;