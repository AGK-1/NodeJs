const { Router } = require("express");
const noterRouter = require("./note");


const router = Router();

router.use("/notes", noterRouter);


module.exports = router;

