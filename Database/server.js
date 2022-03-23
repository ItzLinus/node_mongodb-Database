const express = require('express')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

//Express app
const app = express()

//Establishing connection to server
const dbUri = "mongodb+srv://user55:Qwerty321@cluster1.hisar.mongodb.net/NodeDatabase?retryWrites=true&w=majority";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000), console.log('Server started! Connected to Database!'))
    .catch((err) => console.log(err))

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)


