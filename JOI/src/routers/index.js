const { Router } = require("express");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");
const router = Router();

router.use("/auth", authRouter);
router.use("/post", postRouter);

module.exports = router;
