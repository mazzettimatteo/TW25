console.log("🚀 Esercizi XPath avviati! Guarda i risultati qui sotto.");

/* ---------------------------------------------------------
   FUNZIONE HELPER (NON TOCCARE)
   Questa funzione simula il $x() della console, permettendoti
   di usare XPath dentro il codice JavaScript standard.
   ---------------------------------------------------------
*/
function cerca(xpath) {
    try {
        // document.evaluate è il comando nativo JS per XPath
        const result = document.evaluate(
            xpath, 
            document, 
            null, 
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
            null
        );
        
        const trovati = [];
        for (let i = 0; i < result.snapshotLength; i++) {
            trovati.push(result.snapshotItem(i));
        }
        
        if (trovati.length === 0) return "❌ Nessun elemento trovato";
        return trovati.length === 1 ? trovati[0] : trovati;
        
    } catch (error) {
        return "⚠️ Errore di sintassi XPath: " + error.message;
    }
}

/*
   =========================================================
   PALESTRA XPATH
   Modifica le stringhe dentro le funzioni cerca("...")
   Ricarica la pagina per vedere se hai indovinato!
   =========================================================
*/

// --- ESERCIZIO 1: Il Titolo ---
// Obiettivo: Seleziona l'elemento <h1> della pagina
console.group("1. Trova l'H1");
    // 👇 Scrivi il tuo XPath qui sotto tra le virgolette
    h="h1"
    const es1 = cerca(h); 
    console.log("Risultato:", es1);
console.groupEnd();


// --- ESERCIZIO 2: ID specifico ---
// Obiettivo: Seleziona il div che contiene la libreria (id="libreria")
console.group("2. Sezione Libreria");
    // 👇 Suggerimento: usa @id
    const es2 = cerca("//div[@id='libreria']"); 
    console.log("Risultato:", es2);
console.groupEnd();


// --- ESERCIZIO 3: Gerarchia ---
// Obiettivo: Seleziona tutti gli 'span' che hanno classe "autore"
console.group("3. Gli Autori");
    // 👇 Suggerimento: //tag[@attributo='valore']
    const es3 = cerca("//span[@class='autore']");
    console.log("Risultato:", es3);
console.groupEnd();


// --- ESERCIZIO 4: Testo Esatto ---
// Obiettivo: Trova l'elemento span che contiene ESATTAMENTE il prezzo "18€"
console.group("4. Prezzo Dune");
    // 👇 Suggerimento: text()='...'
    const es4 = cerca("//span[text()='18€']"); 
    console.log("Risultato:", es4);
console.groupEnd();


// --- ESERCIZIO 5: Contiene Testo (Parziale) ---
// Obiettivo: Trova il link (a) che porta a Wikipedia (cerca la parola 'Wikipedia' nel testo)
console.group("5. Link Wikipedia");
    // 👇 Suggerimento: contains(text(), '...')
    const es5 = cerca("//a[contains(text(), 'Wiki')]"); 
    console.log("Risultato:", es5);
console.groupEnd();


// --- ESERCIZIO 6: Attributi Logici ---
// Obiettivo: Seleziona il campo input che serve per la password (type="password")
console.group("6. Input Password");
    const es6 = cerca("//input[@type='password']");
    console.log("Risultato:", es6);
console.groupEnd();


// --- ESERCIZIO 7: Parentela (Difficile) ---
// Obiettivo: Trova il titolo del libro scritto da "Tolkien".
// Logica: Trova lo span autore 'Tolkien', sali al genitore (li), poi scendi al titolo.
// Sintassi: //span[text()='Tolkien']/../span[@class='titolo']
console.group("7. Il libro di Tolkien (Navigazione)");
    // 👇 Prova a copiare la soluzione sopra se non riesci
    const es7 = cerca("//span[text()='Tolkien']/../span[@class='titolo']"); 
    console.log("Risultato:", es7);
console.groupEnd();