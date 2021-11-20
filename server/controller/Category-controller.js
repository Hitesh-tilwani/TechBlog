
import { response } from 'express';
import Category from '../schema/Category-schema.js';

// i will send data to mongoDB
export const createCategory = async(request,response) => {     
    // console.log(request.body);
    try{
        // we have to save it in database
        //making a new object
       const category=await new Category(request.body);  
       // saving the object
       category.save();   // saved to DB.
       response.status(201).json('blog saves successful'); 
    }
     catch(error){
         response.status(500).json(error);
     }
    }
    

export const getCategory = async(request,response) => {
    try {
        let category=await Category.findById(request.params.id);
        response.status(200).json(category);
    } catch (error) {
        response.status(500).json(error);
    }
}


export const updatePost = async(request,response) => {
    try {
        // $set - it will replace the whole object
        await Category.findByIdAndUpdate(request.params.id ,{ $set: request.body});
        response.status(200).json('Blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deleteCategory = async(request,response) => {
    try {
     // let post (we will get the post with referenced id 
    //            which we have to delete)
        let category = await Category.findById(request.params.id)
        await category.delete();
       response.status(200).json('Blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


