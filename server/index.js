// you can write like these.
//const express = require ('express');

import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes  from './routes/posts.js' 


const app = express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Roman:Roman123@cluster0.licwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 const PORT = process.env.PORT || 5000;
// it is a function which takes two parameter
 mongoose.connect(CONNECTION_URL, {userNewUrlParser: true,useUnifiedTopology:true})
 .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))// they return promise
 .catch((error) => console.log(`${error} did not connect`));// if the server is not connected
 mongoose.set('useFindAndModify',false);  
// https://www.mongodb.com/cloud/atlas


