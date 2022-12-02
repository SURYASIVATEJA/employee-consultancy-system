const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./models/Student");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://suryasivateja:quipid007@cluster0.nhs01lp.mongodb.net/Employee_Consultancy?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
//app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    console.log("hello");
    console.log(req.body)
    const studName=req.body.studName;
    const studNumber=req.body.studNumber;
    const student=new StudentModel( req.body.newUser);
    try{
    await student.save();
    res.status(200);
}
catch(err){
    console.log(err);
}
});
app.get("/display",async(req,res)=>{
    StudentModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});

app.post("/login",async(req,res)=>{
    console.log(req.body)
    console.log("adi");
   StudentModel.find({username:req.body.name},(err,result)=>{
        if(err){
            res.send(err);
        }
        console.log(result)
        res.json(result);
    });
});

    app.listen(3000,()=>console.log("Server Ready."))