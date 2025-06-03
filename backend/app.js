import express from 'express';
const app = express();
import {nanoid} from 'nanoid'; 


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/api/create", (req,res)=>{
   
    res.send(nanoid(10));
})

app.post("/api/create", (req,res)=>{
    const {url} = req.body;
   res.send(url);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})