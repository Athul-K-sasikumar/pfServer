const express=require('express')
const router= new express.Router()
const userController =require('../controllers/userController')
const projectController=require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')



router.post('/register',userController.registerController)


router.post('/login',userController.loginController)


router.post("/add-project",jwtMiddleware,multerMiddleware.single("projectImg"),projectController.addProjectController)


router.get("/home-projects",projectController.gethomeProjectsController)

router.get("/all-projects",jwtMiddleware,projectController.getAllProjectsController)

router.get("/user-projects",jwtMiddleware,projectController.getAllProjectsController)




module.exports=router