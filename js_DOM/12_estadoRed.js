// Ejercicio 12 - Estado de la red
export function estadoRed() {
    const online = () => {
        const div = document.createElement("div");

        if(navigator.onLine) {
            div.textContent = "Conectado a la Red ✔️";
            div.classList.add("online");
            div.classList.remove("offline");
        } else {
            div.textContent = "Sin conexión a la Red ✖️";
            div.classList.add("offline");
            div.classList.remove("online");
        }
        document.body.insertAdjacentElement("afterbegin", div);
        setTimeout(() => document.body.removeChild(div), 2000);
    };
    online();
    window.addEventListener("online", online);
    window.addEventListener("offline", online);
}