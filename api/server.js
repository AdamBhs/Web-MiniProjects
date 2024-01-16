const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Connecting to the Data base
mongoose.connect("mongodb://localhost:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
  .catch(console.error);


// Call the Schema
const Todo = require("./models/Todo");

// print the data
app.get('/todos', async(req, res) => {
    const todos = await Todo.find();

    res.json(todos);
})

// uplodying new data
app.post('/todo/new', (req, res) => {
    const todo =  new Todo({
        text: req.body.text
    })
    
    todo.save();
    res.json(todo);
})

// Deleting data
app.delete('/todo/delete/:id', async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})

// Update the state of data
app.get('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();
    res.json(todo);
})
// Running the server on port 3001
app.listen(3001, () => console.log("Server listen on port 3001"));