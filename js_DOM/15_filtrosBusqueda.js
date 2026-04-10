// Ejercicio 15 - Filtros de Búsqueda
export function filtrosBusqueda(input, selector) {
    document.addEventListener("keyup", (e) => {
        if(e.target.matches(input)) {

            if(e.key === "Escape") e.target.value = "";

            document.querySelectorAll(selector).forEach(el => {
                if(el.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    el.style.visibility = "visible";
                    el.style.opacity = "1";
                    el.style.order = 0;
                } else {
                    el.style.visibility = "hidden";
                    el.style.opacity = "0";
                    el.style.order = 1;
                }
            });
        }
    });
}
