// Imports
import express from "express"// import Express for creating the server
import dotenv from 'dotenv'
import mongoose from 'mongoose' 
import db from  './db/conn.mjs'
import cors from 'cors'// it is middleware
import recipeRoutes from './controllers/Recipe.mjs'
// Variable Declarations 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5051;

// Middleware , Middleware goes between my variable declarations and my routes.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


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
// Api routes
app.use('/api/recipes', recipeRoutes)



