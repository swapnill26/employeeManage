const router=require('express').Router();
const {getUserData,login ,addManager}=require('../controller/user-controller');

router.get('/',getUserData);

router.post("/login",login);

router.post("/register",addManager)

module.exports=router;