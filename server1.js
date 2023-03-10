const express = require('express'); //load express module

const app = express(); //start an express app
const router = express.Router();

// create landing page
router.get('/',(req,res)=>{
    //send response
    res.json('hey, you are in the home page!!');
});

// /profile
router.get('/profile',(req,res)=>{
    res.json('hey, you\'re in my profile');
});

//handle route errors
router.get('*',(req,res)=>{
    res.send('page not found');
});

app.use('/',router)
// start an express server
app.listen(8000,()=>{
    console.log('app starting at port',8000)
})