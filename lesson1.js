const fs = require('fs');
const http = require('http');
//create a file or Write to a file
// fs.writeFile('userData.txt', 'Tanu', (err)=>{
//     console.log('error',err);
// })
const server = http.createServer((req,res)=>{
//    console.log('type of method(GET/POST/PUT),and url used',req.method,req.url)
// res.setHeader('Content-Type','text/html');
if(req.method === 'POST'){
    res.on('end',()=>{
        res.end('<h1>Success!</h1>')
    })
    res.on('data',(chunk)=>{
        console.log('data', chunk)
    })
}

});


server.listen(5000);