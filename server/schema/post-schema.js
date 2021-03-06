import mongoose  from "mongoose";

const PostSchema =mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
        required:false,
    },
    createdDate:{
        type:Date
    }

})

// we have to make schema in MongoDB
const post = mongoose.model('post',PostSchema);

export default post;