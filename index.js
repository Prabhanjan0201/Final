const express = require('express')
const mongoose = require('mongoose')
const app=express()
const cors = require ('cors')
const register=require('./routes/register')
const login=require('./routes/login')
const leave=require('./routes/leave')

mongoose.connect("mongodb://localhost/final")
    .then(()=>console.log('Connected to mongoDb...'))
    .catch((err)=>console.log('Could not connect to mongoDb',err))

app.use(express.json())
app.use(cors())
app.use('/api/register',register)
app.use('/api/login',login)
app.use('/api/leave',leave)

app.listen(8888, ()=>console.log('Listening to port 8888...'))