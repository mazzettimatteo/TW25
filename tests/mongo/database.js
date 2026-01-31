const mongoose=require("mongoose")

// 1. Stringa di connessione locale
// 'mongodb://localhost:27017' è la porta standard di Mongo
// '/universita' è il nome del DB che verrà creato automaticamente
const url="mongodb://localhost:27017/uni"

mongoose.connect(url)
    .then(()=>{
        console.log("Successful connection")
    })
    .catch((er)=>{
        console.error("Connection error: ",er)
    })

//definiamo la struttura che ogni studente avrà: sto creando uno schema con mongoose(in genere però mongodb è noSQL)
const studentSchema=new mongoose.Schema({
    nome: String,
    cognome: String,
    matricola: {type: Number, required: true},
    iscritto: Boolean
})

//creo il modello, per la collezione "students": mongoose prende Students e genera in automatico la collection students
const Student=mongoose.model("Student", studentSchema)

module.exports=Student