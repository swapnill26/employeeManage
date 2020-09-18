const  jwt=require('jsonwebtoken');

module.export=(req,res,next)=>{
        //get token from header
        const token = req.header('x-auth-token');

        //check if token is available or not
        try{
        if(!token){
            return res.status(401).json({msg: 'No token, authorized denied'});
        }
    
        //verify or decode token
        jwt.verify(token, config.get('jwtSecret'), (error, decode)=>{
            if(error){
                return res.status(401).json({msg: 'token is not valid'});
            }else{
                req.user = decode.user;
                next();
            }
        });
    }catch(err){
        console.error('something wrong with auth middleware');
        res.status(500).json('server error');
    }
}