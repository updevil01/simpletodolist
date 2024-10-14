const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes')
mongoose.connect('mongodb://localhost/todolist').then(()=>{
    console.log('Connected to Mongodb')
}).catch((err)=>{console.log(err)})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/todos',(todoRoutes))


app.listen(5000,()=>console.log('Server Start'))