//
const express=require('express');
const connectDb=require('./config/db')

const app=express();
connectDb();

//initialising middleware
app.use(express.json({extended:false}))
app.use('/api/user',require('./routes/api/user'));

app.get('/',(req,res)=>{
    //console.log()
    res.send("get the data");
})

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})