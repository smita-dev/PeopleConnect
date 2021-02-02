//
const express=require('express');
const connectDb=require('./config/db')
//const student=require('./routes/api/student')
const app=express();

connectDb();
const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})



app.use('/api/student',require('./routes/api/student'));
app.get('/',(req,res)=>{
    //console.log()
    res.send("get the data");
})