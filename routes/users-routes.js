const express = require('express');


const userRouter = express.Router();

const DUMMY_USERS = [{
id:'u1',
userName:'Tanu Goyal',
createdon:'6/June/2021',
places:[]
},
{
    id:'u2',
    userName:'Aarti Goyal',
    createdon:'1/June/2021',
    places:[],
    },
    {
        id:'u3',
        userName:'Rupali Goyal',
        createdon:'30/June/2021',
        places:[]
        }
]
userRouter.get('/:uid',(req,res,next)=>{
    const userId = req.params.uid;
    const user = DUMMY_USERS.find((u)=>u.id === userId);
    res.json({message:'Success!',data:user});
})
module.exports = userRouter;