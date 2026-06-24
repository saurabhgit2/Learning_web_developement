const express=require('express');
const app=express();

app.listen(3000, ()=>{console.log("Server started at 3000")});

app.get('/',(request,response)=>{response.send("This is Saurabh's first server");})

app.get('/main',(request,response)=>{
    response.send("This is the main page.");
});

app.get('/career',(request,response)=>{
  response.send("This is career page");
});

app.post('/user',(request,response)=>{
  response.send("This is user page");
});