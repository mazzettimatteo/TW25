function scarica(){

    //ogni singolo passaggio è una promessa, incluse ricezione e decodifica della risposta

    fetch('https://jsonplaceholder.typicode.com/users/1')
    /*fetch(url, request) dove url è obligatorio, 
    mentre request no e assume la forma di { method: "POST", headers: {...}, body: JSON.stringify(datas_to_send)
    }
    */

    .then(function(response){
        if(!response.ok){
            throw new Error("Errore HTTP: "+response.status)
        }
        return response.json()  
    })
    .then(function(utente){
        console.log(utente) 
        document.getElementById("risultato").innerHTML = `
                <p>Nome: ${utente.name}</p>
                <p>Email: ${utente.email}</p>
            `
    })
    .catch(function(er){
        console.error(er)
    })
}