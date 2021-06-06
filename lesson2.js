const express = require('express');

const app = express();

//parse the incoming data from request and move to next handler
app.use((req,res,next)=>{
    let body='';
    req.on('end',()=>{
      const userName = body.split('=')[1];
      if(userName){
          req.body ={name:userName};
      }
      next();
    })

    req.on('data', (chunk)=>{
     body += chunk;
    })

})

app.use((req,res,next)=>{
    if(req.body){
        return res.send('userName : ' + req.body.name )
    }
    res.send('<form method="POST"><input type="text" name="userName"/><button type="submit">Submit</button></form>')
})
app.listen(5000);