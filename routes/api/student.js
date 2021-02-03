const express=require('express');

const router=express.Router();

//@route   GET api/student
//@Desc    test route
//@access  public

router.get('/',(req,res)=>{
    console.log("in student router");
    res.send("in student api")
})

module.exports=router;
