
import { response } from 'express';
import Post from '../schema/post-schema.js';

// i will send data to mongoDB
export const createPost = async(request,response) => {     
    console.log(request.body);
    try{
        // we have to save it in database
        //making a new object
       const post=await new Post(request.body);  
       // saving the object
       post.save();   // saved to DB.
       response.status(201).json('blog saves successful'); 
    }
     catch(error){
         response.status(500).json(error);
     }
    }
    
export const getAllPosts = async(request,response) => {
  let username = request.query.username;
  let category = request.query.category;
  let posts; 
    try {
        if(username) 
        //     await Post.find({
        //         username (this is the username in the object) 
        //         :
        //         username (this is the username above which we 
                            //  get from request)})
        // }
             posts = await Post.find({username : username})
        else if(category)
             posts = await Post.find({categories: category})
        else
              posts =await Post.find({});
      response.status(200).json(posts); //it is common
    }   catch (error) {
        response.status(500).json(error);
    }
}

export const getPost = async(request,response) => {
    try {
        let post=await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
}



export const updatePost = async(request,response) => {
    try {
        // $set - it will replace the whole object
        await Post.findByIdAndUpdate(request.params.id ,{ $set: request.body});
        response.status(200).json('Blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async(request,response) => {
    try {
     // let post (we will get the post with referenced id 
    //            which we have to delete)
        let post = await Post.findById(request.params.id)
        await post.delete();
       response.status(200).json('Blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


