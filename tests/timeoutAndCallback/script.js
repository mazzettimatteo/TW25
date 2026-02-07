console.log("1. Sincrono: Inizio");

// Lo definisco SUBITO, tempo 0.
// Dovrebbe essere veloce, no? Invece finisce nella coda "Lenta" (Macrotask)
setTimeout(() => console.log("2. Timeout (Macrotask): Arrivo buon ultimo"), 0);

// Una funzione normale chiamata DOPO il timeout
function funzioneNormale() {
    console.log("3. Sincrono: Funzione chiamata DOPO il timeout");
}
funzioneNormale();

// Una Promise chiamata ALLA FINE
// Finisce nella coda "VIP" (Microtask) e scavalca il timeout!
Promise.resolve().then(() => console.log("4. Promise (Microtask): Ti passo davanti"));

console.log("Fine script principale");