const createError = require('http-errors');
const express = require('express');
const path = require('path');

var app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const mainRouter = require('./routes/main')
app.use('/', mainRouter)


app.listen(port, ()=>{
  console.log(`http://localhost:${port}에서 실행중...`)
})

module.exports = app;
