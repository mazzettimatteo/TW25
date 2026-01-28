function scaricaTHENCATCH(){

    axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(function(response){
            utente=response.data //è già JSON, non serve parisng
            console.log("status: ",response.status)
            console.log("Dati: ", utente)

            document.getElementById("risultato1").innerHTML = `
                <p>Nome: ${utente.name}</p>
                <p>Email: ${utente.email}</p>
            `
        })
        .catch(function(errore){
            console.erroor("Errore!",errore)
            alert("Errore nel caricamento")
        })
        .finally(function(){
            console.log("operazione conclusa")
        })

}


async function scaricaASYNCAWAIT(){
    try{
        response=await axios.get('https://jsonplaceholder.typicode.com/users/1')
        utente=response.data

        document.getElementById("risultato2").innerHTML = `
                <p>Nome: ${utente.name}</p>
                <p>Email: ${utente.email}</p>
            `
    }
    catch(er){
        console.error(er)
    }
}