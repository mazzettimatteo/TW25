$("#scarica").click(function(){ //questo $("#scarica") è analogo a document.getElementById("scarica")
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users/1", //campo obligatorio
        method: "GET",  //per rendere ancora più veloce il tutto esistono direttamente i metodi $.get(), $.post(), ...
        dataType: "json",


        //le funzioni di callback success() e error() sono chiamate solo nel momento in cui readyState==4 (loaded)
        success: function(utente){      //metodo obligatorio
            console.log(utente)
            document.getElementById("risultato").innerHTM=`
                <p>Nome: ${utente.name}</p>
                <p>Email: ${utente.email}</p>
            `
        },

        error: function(errore){
            alert("c'è stato un errore"+errore.status)
        }
    })
})

//alternativamente, dato che il metodo $.ajax() è una promessa posso creare catene di funzioni then(good, bad) 
//in cui good, bad sono i metodi da chiamare in caso di successo o meno 