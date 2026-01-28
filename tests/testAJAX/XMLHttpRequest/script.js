function scaricaDati(){

    
    xhr=new XMLHttpRequest()
    //xhr.open(metodo_http, url, bool_asincronicità) 
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true)
    xhr.onreadystatechange=function(){//qui specifico l'handler(funzione che si occupa di gestire la risposta)
        if(xhr.readyState===4 && xhr.status===200){
            //readyState==4 o (===4) corrisponde a "complete"
            //status è invece lo stato della risposta HTTP
            console.log("raw datas recieved:", xhr.responseText)//responseText contiene la risposta(potevo usare anche responseXML)
            utente=JSON.parse(xhr.responseText)

            div=document.getElementById("risultato")
            div.innerHTML=`
                <p>Nome: ${utente.nome}</p>
                <p>Mail: ${utente.email}</p> 
            `
        }
        else if(xhr.readyState===4 && xhr.status!==200){
            alert("Errore!"+xhr.status)
        }
    }
    //la richiesta viene inviata per mezzo di una send(param) dove param contiene il body della risorsa da inviare:
    //se facessi una POST allora param:=name=value&anothename=anothervalue&so=on
    //per una GET param:=null, perché in questo caso i parametri sonno passati tramite l'URL indicato nella open(...)
    //se volessi passare un'altro tipo di dato (sempre MIME) dovrei specificarlo con: xhr.setRequestHeader("Content-Type", "mime/type")  
    xhr.send(null)

    console.log("Richiesta inviata...attesa risposta")
}

