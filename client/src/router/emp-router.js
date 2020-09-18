const employee=require('express').Router();
const { addEmp , updateEmpDetails ,deleteEmpDetails }=require('../controller/employee-controller');

employee.post('/addEmployee',addEmp);

employee.post('/updateEmp',updateEmpDetails);

employee.post('/deleteEmp',deleteEmpDetails);

        
module.exports=employee;