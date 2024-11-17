const express = require('express')
const todoRouter = require('./routers/todo.router')
const app = express()

app.use(express.json())

const port = 3009

app.get('/', (req, res) => {
  res.send('Todo Application')
})

app.use('/todo', todoRouter)


app.listen(3333, () => {
  console.log(`Example app listening on port ${port}`)
})
