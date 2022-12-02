const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    username:{
        type:String,
        unique: true},
        password:{
            type:String
        },
        cur_pos:{
            type:String
        },
        skills:[
            {
                name:String,
                level:Number
            }

        ]

});
const Student=mongoose.model("user",StudentSchema);
module.exports=Student;