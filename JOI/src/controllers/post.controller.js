const postService = require("../services/post.service");

const postT = async (req, res) => {

    const { body } = req;
    try {
        let result = await postService.postT(body);

        if (!result) {
            return res.status(400).json({ error: "Error happened" })
        };
        console.log("scsd");
        res.json({result});

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const postController = {
    postT,
};

module.exports = postController;
