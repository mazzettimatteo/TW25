const express=require("express")
const app=express()

app.use(express.json())  //dico che tutti i req.body verranno letti come JSON, questo è un MIDDLEWARE
app.use((req,res,next)=>{
    console.log(`qualcuno ha chiamato ${req.url} con metodo ${req.method}.`)
    next() //serve per chiamare la prox funzione del middleware
})

app.get("/",(req,res)=>{   
    res.send("<h1>Welcome to my express server</h1>")
})

utenti=[
        {id:1, nome: "Pippo"},
        {id: 2, nome: "Pluto"}
    ]

app.get("/api/utenti", (req,res)=>{
    res.json(utenti)
})

app.get("/api/utenti/:id", (req,res)=>{
    userId=req.params.id 
    res.send(`Stai cercando l'utente con ${userId}`)
})

app.post("/api/crea-user",(req,res)=>{
    datas=req.body
    console.log(`Dati ricevuti: ${datas}`)
    newUser={
        id: utenti.length+1,
        nome: datas.nome,
        cognome: datas.cognome,
    } 
    utenti.push(newUser)
    console.log("Local db aggiornato")

    res.status(201).json({
        messaggio: "Utente creato con successo",
        dati_ricevuti: newUser
    })
})


const port=3000

app.listen(port,function(){
    console.log(`Il server(app) è online su http://localhost:${port}`)
})