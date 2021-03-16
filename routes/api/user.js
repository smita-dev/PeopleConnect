const express=require('express');

const router=express.Router();

//@route   GET api/user
//@Desc    test route
//@access  public

router.get('/',(req,res)=>{
    console.log("in user router");
    res.send("in user api")
})

module.exports=router;
