const jwt=require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddlware");
    const token =req.headers["authorization"].split(" ")[1]
    console.log(token);
 if(token){
    try{
        const jwtResponse = jwt.verify(token,process.env.JWT_PASSWORD)
        console.log(jwtResponse);
        req.userId=jwtResponse.userId
         
        next()
}catch{
    res.status(401).json("please login....")
}
 }else{
    res.status(406).json("Token Missing")
 }
    
}
module.exports=jwtMiddleware