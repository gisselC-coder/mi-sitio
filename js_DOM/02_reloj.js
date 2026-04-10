// Ejercicio 2 - Reloj
export function reloj() {
    const r = document.getElementById("reloj");
    const playR = document.getElementById("iniciar-reloj");
    const stopR = document.getElementById("detener-reloj");

    let timer = null;
    playR.addEventListener("click", () => {
        if (timer !== null) return;
    
        timer = setInterval(() => {
            let clockHour = new Date().toLocaleTimeString();
            r.innerHTML = `<h3>${clockHour}</h3>`;
        }, 1000);
        playR.disabled = true;
    });

    stopR.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
        
        r.innerHTML = "";
        playR.disabled = false;
    });
}