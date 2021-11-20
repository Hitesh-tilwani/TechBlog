import mongoose  from "mongoose";

const CategorySchema =mongoose.Schema({
    categories:{
        type:String,
        required:false,
        unique:true
    },
    createdDate:{
        type:Date
    }
})

// we have to make schema in MongoDB
const category = mongoose.model('category',CategorySchema);

export default category;