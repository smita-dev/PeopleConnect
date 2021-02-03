const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=Student=mongoose.model('student',StudentSchema);