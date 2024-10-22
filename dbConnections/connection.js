const mongoose= require('mongoose')
const dbConnections = process.env.CONNECTION_STRING



mongoose.connect(dbConnections).then(res=>{
    console.log("MongoDb Atlas connected succesfully with Pfserver");
    
}).catch(err=>{
    console.log("connection failed");
    console.log(err);
    
    
})
