btn=document.getElementById("btn")
box=document.getElementById("box")

async function prendiDati(){
    box.innerText = "⏳ Attendi... sto contattando il server...";
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
    //qui la funzione prendiDati() è sospesa fino alla conclusione della chiamata await, poi procederà normalmente
    //in questo caso quindi attenderà finche il fetch non viene eseguito

    const dati = await response.json(); //ora invece mi metto in attesa dell'estrazione del JSON e poi riprendo

    console.log(dati);


    box.innerHTML = `
        <h3>Dati Ricevuti!</h3>
        <p>Nome: <strong>${dati.name}</strong></p>
        <p>Email: ${dati.email}</p>
    `
}

btn.onclick = prendiDati;