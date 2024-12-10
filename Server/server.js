const express = require('express');
const mongoose = require("mongoose")
const app = express();

const Article = require('./Models/Article')

mongoose.connect(`mongodb+srv://darwesh:01282686784Mm@firstnodejs.wxf00.mongodb.net/?retryWrites=true&w=majority&appName=FirstNodeJs`).then(() => {
    console.log('connected Success');
}).catch((error) => {
    console.log(`error ${error}`);
})

app.use(express.json())

const users = []


app.listen(3001, () => {
    console.log('started');
})