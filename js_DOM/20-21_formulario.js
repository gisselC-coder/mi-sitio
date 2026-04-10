// Ejercicio 20 y 21 - Validacion y Envío de Formulario
export function formulario() {
    const form = document.querySelector(".form");
    const inputs = document.querySelectorAll(".form [required]");

    inputs.forEach(input => {
        const span = document.createElement("span");
        span.id = input.name;
        span.textContent = input.title;
        span.classList.add("form-error", "none");
        input.insertAdjacentElement("afterend", span);
    });

    document.addEventListener("focusout", (e) => {
        if(e.target.matches(".form [required]")) {

            let input = e.target;
            let pattern = input.pattern || input.dataset.pattern;
            let errorSpan = document.getElementById(input.name);

            if(input.value === "") {
                errorSpan.classList.remove("activo");
                return;
            }

            if(pattern) {
                const expR = new RegExp(pattern);

                if(!expR.test(input.value)) {
                    errorSpan.textContent = input.dataset.error || input.title;
                    errorSpan.classList.add("activo");
                } else {
                    errorSpan.classList.remove("activo");
                }
            }

            if(!pattern) {
                if(input.value === "") {
                    errorSpan.textContent = input.title;
                    errorSpan.classList.add("activo");
                } else {
                    errorSpan.classList.remove("activo");
                }
            }
        }
    });

    document.addEventListener("submit", (e) => {
        //e.preventDefault();
        //alert("Enviando Datos");

        const loader = document.querySelector(".form-loader");
        const res = document.querySelector(".form-respuesta");

        loader.classList.remove("none");
        
        setTimeout(() => {
            loader.classList.add("none");
            res.classList.remove("none");
            form.reset();

            setTimeout(() => res.classList.add("none") , 2000);

        }, 3000);
    });
}