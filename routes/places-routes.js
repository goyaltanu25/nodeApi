const express = require('express');


const router = express.Router();

const DUMMY_PLACES=[{
    id:'p1',
    placeName:'Qutub Minar',
    address:'Seth Sarai, Mehrauli New Delhi, Delhi 110016',
    long:'28.5244946',
    lat:'77.183329',
    createrID:'u2',
},
{
    id:'p2',
    placeName:'Taj Mahal',
    address:'Agra',
    long:'27.1751448',
    lat:'76.9215367',
    createrID:'u1',
},
{
    id:'p3',
    placeName:'India Gate',
    address:'Rajpath, India Gate, New Delhi, Delhi',
    long:'28.6129167',
    lat:'77.227321',
    createrID:'u1',
}]
router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p)=> p.id === placeId);
    res.json({message:"Sucess!",data: place})
})

router.get('/user/:uid',(req,res,next)=>{
    const userId = req.params.uid;
    const place = DUMMY_PLACES.filter((p)=> p.createrID === userId);
    console.log('places', place);
    res.json({message:"Sucess!",data: place})
})

module.exports = router;