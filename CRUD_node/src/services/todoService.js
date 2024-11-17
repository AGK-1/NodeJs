let { todos } = require("../db.js");

const getAllTodos = () => {
    return todos;
};

const createTodo = (body) => {
    let id = 0;

    if (todos.length) {
        let lastItem = todos[todos.length - 1];
        id = lastItem.id;
    } else {
        id = 1;
    }

    const todo = {
        id: todos.length + 1,
        title: body.title,
        content: body.content,
    };

    todos.push(todo);
    return todo;
};

const updateTodo = (id, body) => {
    let index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        return null;
    }

    const updatedTodo = {
        id,
        title: body.title,
        content: body.content,
    };

    todos[index] = updatedTodo;
    return updatedTodo;
};

const updateTodoPart = (id, body) => {
    let todo = todos.find(item => item.id === id);
    if (!todo) return null;

    for (let [key, value] of Object.entries(body)) {
        todo[key] = value;
    }

    return todo;
};

const deleteTodo = (id) => {
    let todo = todos.find(todo => todo.id === id);
    if (!todo) return null;

    todos = todos.filter((item) => item.id !== todo.id);
    return todo;
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    updateTodoPart,
    deleteTodo,
};
