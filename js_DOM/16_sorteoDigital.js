// Ejercicio 16 - Sorteo Digital
export function sorteoDigital(btn, selector) {
    function obtenerGanador () {
        const players = document.querySelectorAll(selector);
        const random = Math.floor(Math.random() * players.length);
        const ganador = players[random];

        return { texto: ganador.textContent, elemento: ganador }
    }
    document.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            const result = obtenerGanador();

            result.elemento.classList.add("winner");
            
            setTimeout(() => {
                alert(`El ganador es: ${result.texto}`);

                result.elemento.classList.remove("winner");
            }, 100);
        }
    });
}