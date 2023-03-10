const express = require('express'); //load express module
const app = express(); //start an express app

// create landing page
app.get('/',(req,res)=>{
    //send response
    res.json('hey, you are in the home page!!');
});

// /profile
app.get('/profile',(req,res)=>{
    res.json('hey, you\'re in my profile');
});

//handle route errors
app.get('*',(req,res)=>{
    res.send('page not found');
});
// start an express server
app.listen(8000,()=>{
    console.log('app starting at port',8000)
})