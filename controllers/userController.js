const users=require('../models/userModel')
const jwt=require('jsonwebtoken') 


exports.registerController = async(req,res)=>{
    console.log("inside registerController");
    const {username,email,password} =req.body
    console.log(username,email,password);
try{
const existingUser=await users.findOne({email})
console.log(existingUser);
if(existingUser){
res.status(406).json("Account Already Exist !! please login...")
}else{
const newUser =new users({
    username,email,password,github:"",linkedin:"",profilePic:""
})
await newUser.save()
res.status(200).json(newUser)

}

}catch(err){
res.status(401).json(err)
}
    
    
}

exports.loginController = async(req,res)=>{
    console.log("Inside loginController");
    const {email,password}= req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){

            const token =jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            res.status(404).json("invalid email / password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}