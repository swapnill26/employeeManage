 const connection=require('../config/database');

module.exports={

    create:(callback)=>{

      connection.query('SELECT * FROM employees',(error,results)=>{

            if(error){ 

                return callback(error);
           
            }

            return callback(null,results)

        })
    },

    login:(data,callback)=>{

       connection.query(

           `SELECT * FROM managers WHERE email = ?`,

           [data.email],

           (error,results)=>{

            if(error){  

                return callback(error)

            }

            return callback(null,results)
            
        })
    },
    createManager:(data,callback)=>{
        
        connection.query(
            'INSERT INTO `managers`( `email`, `first_name`, `last_name`, `password`, `address`, `dob`, `company`) VALUES (?,?,?,?,?,?,?)',
            [
                data. email,
                data.first_name,
                data.last_name,
                data.password,
                data.address,
                data. dob,
                data.company

            ],
            (error,results)=>{

                if(error){  
    
                    return callback(error)
    
                }
    
                return callback(null,results)
                
            })
    }
}  