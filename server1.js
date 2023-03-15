const express = require('express'); //load express module
const bodyParser = require('body-parser');
const app = express(); //start an express app
const router = express.Router();

app.use(bodyParser());
app.use(express.static('public'));
app.use('/user',router)

// create landing page 
app.get('/',(req,res)=>{
    //send response
    
    //res.sendFile(path.join(__dirname,"/index.html"))
    res.sendFile("public/index.html")
});
// /profile
router.get('/profile',(req,res)=>{
    res.json('hey, you\'re in my profile');
});

// what is post?
  // to receive what the client is sending
// why are we using it?
  // get information, process it and always send a response

router.post('/',(req,res)=>{
    // req to receive data from the client or browser
    console.log('request:',req.body);

    //res to send stuff to the browser

    res.json({msg:req.body})})

//handle route errors
router.get('*',(req,res)=>{
    res.send('page not found');
});

//app.use('/',router)
// start an express server
app.listen(8000,()=>{
    console.log('app starting at port',8000)
})