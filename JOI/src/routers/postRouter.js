const { Router } = require("express");
const postController = require("../controllers/post.controller");




const postRouter = Router();


postRouter.post("/postT", postController.postT);

module.exports = postRouter;