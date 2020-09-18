const connection=require('../config/database');

module.exports={
    addEmpl:(data,callback)=>{
        connection.query(
            `INSERT INTO employees(emp_firstname, emp_lastname, emp_address, emp_dob, emp_mobile, emp_city) VALUES (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.address,
                data.dob,
                data.mobile,
                data.city
            ],
            (err,result)=>{
                if (err) throw err;
                callback(null,result)
            })
    },
    updateEmp:(data,callback)=>{
        connection.query(
            'UPDATE `employees` SET `emp_firstname`=?,`emp_lastname`=?,`emp_address`=?,`emp_dob`=?,`emp_mobile`=?,`emp_city`=? WHERE `emp_id`=?',
            [   
                
                data.first_name,
                data.last_name,
                data.address,
                data.dob,
                data.mobile,
                data.city,
                data.emp_id
        
            ],(err,result)=>{
                if (err) throw err;
                callback(null,result)
            })
    },
    deleteEmp:(data,callback)=>{
        connection.query(
            'DELETE FROM `employees` WHERE `emp_id`=? ',[
                data.emp_id,
            ],(err,result)=>{
                if (err) throw err;
                callback(null,result)
            })
    }
}