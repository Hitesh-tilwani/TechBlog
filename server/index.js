import express  from "express";
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";
//components
import Connection from "./database/db.js";

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const PORT = 8000;

app.listen(PORT, () => 
 console.log(`server is running on port ${PORT}`)
 
 )

// console.log('hi hitu bhai');
Connection();

