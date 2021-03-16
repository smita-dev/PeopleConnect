const express=require('express');
const {body,validationResult}=require('express-validator')
const router=express.Router();

//@route   GET api/user
//@Desc    test route
//@access  public

router.post('/',
body('Name').isEmail(),
body('Password').isLength({min:5})
,(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    console.log("in user router");
    console.log(req.body);
    res.send("in user api")
})

module.exports=router;
