// Ejercicio 3 - Alarma
export function alarma() {
    const playA = document.getElementById("iniciar-alarma");
    const stopA = document.getElementById("detener-alarma");
    let alarm = null;
    const sonido = new Audio("extras/alarma.mp3");

    playA.addEventListener("click", () => {
        if (alarm !== null) return;
    
        sonido.loop = true;
        sonido.play();
    
        alarm = true;
        playA.disabled = true;
    });

    stopA.addEventListener("click", () => {
        sonido.pause();
        sonido.currentTime = 0;
        
        alarm = null;
        playA.disabled = false;
    });
}