const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse the incoming data from request and move to next handler by default
//urlencoded is the type of data like html elements
app.use(bodyParser.urlencoded({extended:false}))


//only execute for post requuests
app.post('/user',(req,res,next)=>{
    res.send('userName : ' + req.body.userName )

})

//only executes for get requests
app.get('/',(req,res,next)=>{
    res.send('<form action="/user" method="POST"><input type="text" name="userName"/><button type="submit">Submit</button></form>')
})

app.listen(5000);