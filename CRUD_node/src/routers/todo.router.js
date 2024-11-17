const { Router } = require("express");
const { todoList, createTodo, updateTodo, updateTodoPart,deleteTodo} = require("../controllers/todo.controller");

const todoRouter = Router();

todoRouter.get('/', todoList);

todoRouter.post('/', createTodo);

todoRouter.put('/:id', updateTodo);

todoRouter.patch('/:id', updateTodoPart);
todoRouter.delete('/:id', deleteTodo);

module.exports = todoRouter;