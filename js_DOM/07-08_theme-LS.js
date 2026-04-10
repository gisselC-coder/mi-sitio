// Ejercicio 7 y 8 - Modo oscuro + localStorage
export function modoOscuro() {
    const btnDark = document.querySelector(".btn-dark");

    if (!btnDark) return;

    // cargar tema guardado
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // evento click
    btnDark.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}