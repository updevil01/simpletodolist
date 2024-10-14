const express = require('express')
const Routers = express.Router();
const Todo = require('../models/modelSchema')


Routers.get('/',async(req,res)=>{
    try{
        const todos = await Todo.find()
        res.json(todos)
    }catch(err){
        res.status(500).json({message:`error,${err.message}`})
    }
})

Routers.post('/',async(req,res)=>{
    const todo = new Todo({
        task:req.body.task
    })

    try{
        const newTodo = await todo.save()
        res.status(201).json(newTodo);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
})


module.exports = Routers;