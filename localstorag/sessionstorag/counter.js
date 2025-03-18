if (sessionStorage.getItem("startTime") === null) {
  // Se non esiste, memorizza il tempo di inizio
  sessionStorage.setItem("startTime", Date.now());
}

// Funzione per aggiornare il contatore ogni secondo
function updateCounter() {
  const startTime = parseInt(sessionStorage.getItem("startTime"));
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

  // Mostra il tempo trascorso
  document.getElementById("counter").innerText = elapsedTime;
}

// Esegui l'aggiornamento ogni secondo
setInterval(updateCounter, 1000);

// Avvia l'aggiornamento subito
updateCounter();

// Aggiungi la funzionalità del pulsante Reset
document.getElementById("resetButton").addEventListener("click", function () {
  sessionStorage.removeItem("startTime");
  sessionStorage.setItem("startTime", Date.now()); // Reimposta il contatore
  updateCounter(); // Aggiorna subito il contatore
});
