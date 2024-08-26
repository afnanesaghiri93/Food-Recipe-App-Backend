import express from 'express';
import addRecipe from '../models/AddRecipe.mjs';
const router = express.Router();


//Full CRUD Functionality
//create POST req with new recipe in the body
router.post('/', async(req, res) => {
    try{
    console.log('post request');
    console.log(req.body);
    const createdaddRecipe = await addRecipe.createRecipe(req.body);
    res.status(200).json(createdaddRecipe);//send json res to the frontend if action successful
    } catch (err){
        res.status(400).send(err.message);
    }
})


// READ - GET req
router.get('/', async (req,res) => {
    try {
const foundRecipe =await Recipe.find({}).limit(20);
res.status(200).json(foundRecipe);
    }  catch (err) {
        res.status(400).send(err);
        
    }
} )
export default router