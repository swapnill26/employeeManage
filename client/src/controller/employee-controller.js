const { addEmpl ,updateEmp ,deleteEmp }=require('../service/emp-service')

module.exports={

    addEmp:(req,res)=>{

        const data=req.body;
    
        addEmpl(data,(err,result)=>{

            if(err) throw err;

            if(result){

                return res.json({"msg":"Employee Added"})

            }else{

                return res.json({"msg":"Employee not Added"})

            }

        })
    },
    updateEmpDetails:(req,res)=>{

        const data=req.body;

        console.log(data);

        updateEmp(data,(err,result)=>{
            if(err) throw err;

            if(result){

                return res.json({"msg":"Employee Updated"})

            }else{

                return res.json({"msg":"Employee not Updated"})

            }
        })
    },
    deleteEmpDetails:(req,res)=>{
        const data=req.body;
        
        console.log(data);

        deleteEmp(data,(err,result)=>{
            if(err) throw err;

            if(result){

                return res.json({"msg":"Employee Updated"})

            }else{

                return res.json({"msg":"Employee not Updated"})

            }
        })
    }
}