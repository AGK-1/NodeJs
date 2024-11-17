const { Router } = require("express");
const noteController = require("../controllers/note.controller");

const noterRouter = Router();

noterRouter.get("/", noteController.getNote);

noterRouter.get("/:id", noteController.getNoteid);

noterRouter.post("/", noteController.CreateNote);

noterRouter.post("/del/:id", noteController.DeleteNote);

noterRouter.post("/update/:id", noteController.UpdateNote);

module.exports = noterRouter;
