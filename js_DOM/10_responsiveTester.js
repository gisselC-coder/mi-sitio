// Ejercicio 10 - Responsive Tester
export function responsiveTester() {
    const form = document.getElementById("resTester");
    const btnCerrar = document.querySelector("input[name='cerrar']");
    let testerWindow = null;

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (testerWindow && !testerWindow.closed) {
            testerWindow.focus();
            return;
        }

        const url = form.txtUrl.value;
        const ancho = parseInt(form.txtAncho.value);
        const alto = parseInt(form.txtAlto.value);

        testerWindow = window.open(url, "", `width=${ancho},height=${alto}`);
        console.log("Abrir:", testerWindow);
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            console.log("Cerrar:", testerWindow);

            if (testerWindow) {
                testerWindow.close();
            }
        });
    }
}