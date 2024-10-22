const express=require('express')
const cors = require('cors')
require('dotenv').config()
const router=require('./routes/router')
require('./dbConnections/connection')



const pfServer =express()
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))


const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`PFServer started at port:  ${PORT} and waiting for client request`);
    
})

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">pfserver started </h1>`)
})


pfServer.get('/',(req,res)=>{
    res.status(200).send(`Put request received kkk`)
})