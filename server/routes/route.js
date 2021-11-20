import  express  from "express";
// import { createPost } from "../../client/src/service/api";
import {createPost, getAllPosts, getPost, updatePost , deletePost} from "../controller/post-controller.js";

const router=express.Router();

// with the help of router we call to the post api
router.post('/create',createPost);  
router.get('/posts',getAllPosts);
router.get('/post/:id', getPost);
router.post('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);

export default router;  
