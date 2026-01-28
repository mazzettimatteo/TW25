function preparaPizza(){
    //questa funzione che viene chiamata in faiOrdine() non restituisce subito un risultato per via dei 2s di timeout ma ritorna una promessa
    //il codice che invoca questa funzione si aggancia con .then e .catch e si mette in attesa del timer
    //se si esegue resolve(), allora faiOrdine va nel caso .then, altrimenti nel caso .catch
    return new Promise((resolve,reject)=>{
        console.log("il pizzaiolo ha iniziato")

        setTimeout(()=>{
            successo=Math.random()>0.5

            if(successo){
                resolve("Pizza Margherita")
            }
            else{
                reject("Il forno è esploso")
            }
        },2000)

    })
}

function faiOrdine(){
    boxStato=document.getElementById("stato")
    boxRisultato=document.getElementById("risultato")

    boxStato.innerText="... Impasto la pizza ... attendere 2s ..."
    boxRisultato.innerText=""
    boxRisultato.className=""

    preparaPizza()
        .then((pizza)=>{
            boxStato.innerText = "Ordine completato!";
            boxRisultato.innerText = "Ecco la tua: " + pizza;
            boxRisultato.className = "successo";
        })
        .catch((er)=>{
            boxStato.innerText = "Ordine fallito.";
            boxRisultato.innerText = "Scusa: " + er;
            boxRisultato.className = "errore";
        })
        .finally(()=>{
            console.log("Operazione conclusa (indipendentemente dall'esito)");
        })
}

//ricordiamoci inoltre che se sono in attesa di più promesse, non legate fra loro posso fare 
// Promise.all([p1,p2,p3])
//      .then((values)=>{
//              output=doSomthing(...values)
//      })
//dove p1, p2, p3 erano tre promesse indipendenti
