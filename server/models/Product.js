const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema(
{
    name:{
        type:String,
        require: true
    },
    description:{
        type:String,
        required:true
    }
}
);
module.exports=mongoose.model('Products',ProductSchema);