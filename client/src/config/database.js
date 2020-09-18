const mysql = require('mysql');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mb",
});
connection.connect((err)=>{
    if(err) throw err.errno;
    console.log("database connected");
})




module.exports=connection;