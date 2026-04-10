// Ejercicio 1 - Botón hamburguesa
export function btnHamburguesa() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".panel");
    const navLinks = document.querySelectorAll(".panel a");
    
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("activo");
        hamburger.classList.toggle("activo");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("activo");
            hamburger.classList.remove("activo");
        });
    });
}