import express from 'express';
const app = express();
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
dotenv.config("./.env"); 

import connectDB from "./src/config/mongo.config.js";
import urlSchema from './src/models/shorturl.model.js';


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/api/create", (req,res)=>{
   
    res.send(nanoid(10));
})

app.post("/api/create", (req,res)=>{
    const {url} = req.body;
    const shorturl = nanoid(7)
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shorturl,
    })
    newUrl.save()
   res.send(url);
})

app.listen(3000, ()=>{
    connectDB();
    console.log('Server is running on port 3000');
})