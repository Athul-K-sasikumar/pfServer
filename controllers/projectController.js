const projects =require('../models/projectModel')



exports.addProjectController = async(req,res)=>{
    console.log("Inside addProjectController");
    console.log(req.userId);

    const {title,languages,overview,github,website}=req.body
    console.log(title,languages,overview,github,website);
    
    console.log(req.file.filename);
     try{
     const existingProject = await projects.findOne({github})
     if(existingProject){
        res.status(406).json("project already available in our database    please add another")
     }else{
        const newProject =new projects({
            title,languages,overview,github,website,projectImg:req.file.filename,userId:req.userId
        })
        await newProject.save()
        res.status(200).json(newProject)
     }
     }catch{
      res.status(401).json(err)
     }

    //res.status(200).json("Add project Request received!! ")
    
    
}

exports.gethomeProjectsController  = async(req,res) =>{
    console.log("inside handleProjectsController");
    try{
const homeProjects  = await projects.find().limit(3)
console.log(homeProjects); 
res.status(200).json(homeProjects)
    }catch(err){
   res.status(401).json(err)
    }
}

exports.getAllProjectsController=async(req,res)=>{
    console.log("inside homeProjectsController");
    try{
        const allProjects  = await projects.find()
        res.status(200).json(allProjects)
            }catch(err){
           res.status(401).json(err)
            }
}


exports.getUserProjectsController=async(req,res)=>{
    console.log("inside getProjectsController");
    const userId  =req.userId
    try{
        const allUserProjects  = await projects.find({userId})
        res.status(200).json(allUserProjects)
            }catch(err){
           res.status(401).json(err)
            }
}
