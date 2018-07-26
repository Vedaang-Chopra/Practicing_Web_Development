const express=require('express');               //Here express variable created is a function
const path =require('path');
//Here express is used to create a server app
const app= express();
//As express is a function and we nedd an object thus we create an object by calling express function.
app.get('/home' ,                                   //Path on which get request is handled
 (request,response)=>{
     //This function is basically used as to how or what we will do once a get request is sent on the url 127.0.0.1::2345/home
    // (localhost on which port is opened).Get is handler on this url(Will always listen on url once a request starts).This function starts
    //working when a get request is send on the url.
    response.send("<h1>Hello World</h1>");
})
app.get('/showform',(req,res)=>{
    //SendFile function is used to give access to HTMl file/any file over the server.
    res.sendFile(path.join(__dirname,'form-interaction.html'));
})
app.get('/recreq',(req,res)=>{
    res.send(`Hello ${req.query.username}`      //{req.query.username} this is used to access form data which is send to /recreq ny url.
    );                                          //username is the name of form box<input name='username'>.
    /*setTimeout(()=>{
        res.redirect('/home');
    },2000);*/
});
app.listen(2345,()=>{
    console.log(`Server has started on https:://localhost::2345/`);
})