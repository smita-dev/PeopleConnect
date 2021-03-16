const express=require('express');

const router=express.Router();

//@route   GET api/user
//@Desc    test route
//@access  public

router.post('/',(req,res)=>{
    console.log("in user router");
    console.log(req.body);
    res.send("in user api")
})

module.exports=router;
