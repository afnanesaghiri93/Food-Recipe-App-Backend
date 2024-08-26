import { text } from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema;


const addRecipe = new Schema ({
    user : String,
    text: {
        type:String, 
        required: true
    },
    completed: Boolean,
    ingredients: String,
    
})
export default addRecipe;