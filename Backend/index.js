const express=require("express");
const app=express();

app.get("/",(req,res)=>{
   res.send("hello world from the server")
})

app.get("/about",(req,res)=>{
   res.send("hello world from  about the server")
})

app.get("/contact",(req,res)=>{
   res.send("hello world from contact the server")
})

app.listen(3000,()=>{
    console.log("server is running at port number 3000")
})