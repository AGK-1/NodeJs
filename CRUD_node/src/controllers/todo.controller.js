const todoService = require("../services/todoService");

const todoList = (req, res) => {
    const todos = todoService.getAllTodos();
    res.json(todos);
};

const createTodo = (req, res) => {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newTodo = todoService.createTodo({
        title,
        content,
    });

    res.status(201).json({ message: "Todo created successfully", todo: newTodo });
};

const updateTodo = (req, res) => {
    const { title, content } = req.body;
    const id = parseInt(req.params.id);

    // Validation
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const updatedTodo = todoService.updateTodo(id, { title, content });

    if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo updated successfully", todo: updatedTodo });
};

const updateTodoPart = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;

    const updatedTodo = todoService.updateTodoPart(id, body);

    if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found for partial update" });
    }

    res.json({ message: "Todo updated successfully", todo: updatedTodo });
};

const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedTodo = todoService.deleteTodo(id);

    if (!deletedTodo) {
        return res.status(404).json({ error: "Todo not found for deletion" });
    }

    res.json({ message: "Todo deleted successfully" });
};

module.exports = {
    todoList,
    createTodo,
    updateTodo,
    updateTodoPart,
    deleteTodo,
};
