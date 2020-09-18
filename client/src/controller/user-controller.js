//const {check, validationResult} = require('express-validator');
const {create,login,createManager}=require('../service/user-service');
const  jwt=require('jsonwebtoken');

module.exports={

    getUserData:(req,res)=>{

        create((err,result)=>{

            if(err){

                console.log(err);
                return err;

            }

            if(!result){

              return  res.json({
                    success:0,
                    message:"Record not Found"
                });
            
            }

            return  res.status(200).json(result);
        })

    },

    login:async (req,res)=>{ 

        const data=req.body;
    
        login(data,(err,result)=>{

            if(result[0]){
                    
                if(result[0].password==data.password){
                
                    jwt.sign({result},'swap',(err, token)=>{

                        if(err) throw err;

                        return res.json({token});
                    
                    })
                    
            } else {

                return  res.json({
                    'msg':'password not match'
                });

            }
                
         } else{
                return  res.json({
                    'msg':'email not found'
                });
            }
            
        }); 
    },
    addManager:(req,res)=>{
        const data=req.body;
        createManager(data,(err,result)=>{
            if(result){
                return  res.json({
                    'msg':'User registered'
                });

            }else{
                return  res.json({
                    'msg':'User not registered'
                });
            }
        })
    }
}
