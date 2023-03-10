const express = require('express'); //load express module
const app = express(); //start an express app
const path = require('path');


app.use(express.static('public'));
// create landing page
app.get('/',(req,res)=>{
    //send response
    
    //res.sendFile(path.join(__dirname,"/index.html"))
    res.sendFile("/index.html")
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