// Imports
import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import db from  './db/conn.mjs'
// Variable Declarations 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

// Routes 
app.get('/', (req,res) => {
    res.send(
    'This is the root for my server'
    )
})
//Start my Server
app.listen(PORT, () => {
    console.log(`Server is listining`)
})