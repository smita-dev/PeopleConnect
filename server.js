//
const express=require('express');4

const app=express();

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})

app.get('/',(req,res)=>{
    //console.log()
    res.send("get the data");
})