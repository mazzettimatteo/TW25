function aspetta(sec){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{
            console.log("Tempo scaduto")

            resolve("Operazione terminata con successo")
        },sec*1000)
    })
}

async function avvia(){ 
    console.log("Inizio...")
    msg=await aspetta(3)
    console.log(msg)
    

    return 42
}

avvia() //tutte le funzioni impostate con async ritornano una promessa(di nascosto)
.then((x)=>{    //quindi posso fare .then sulla promessa, ecc...
    console.log("async avvia() ha mantenuto la promessa ed ha ritornato il numero "+x)
})
.catch((er)=>{
    console.log(`ERRORE ${er}`)
})

