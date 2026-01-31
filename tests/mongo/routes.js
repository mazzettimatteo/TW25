const express=require("express")
const router=express.Router()
const Student=require("./database.js")

router.post("/create", async(req,res)=>{
    try{
        const newS=new Student({
            nome: req.body.nome,
            cognome: req.body.cognome,
            matricola: req.body.matricola 
        })

        const result=await newS.save()
        res.status(201).json(result)
        console.log(`\'create\' operation with ${req.method} completed`)
    }
    catch(er){
        res.status(500).json({error: er.message})
    }
})

router.get("/list", async (req,res)=>{
    try{
        s=await Student.find()
        res.json(s)
        console.log(`\'list\' operation with ${req.method} completed`)
    }
    catch(er){
        res.status(500).json({error: er.message})
    }
})

module.exports=router