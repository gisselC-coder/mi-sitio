export function scrollMenu() {
    const navLinks = document.querySelectorAll(".menu a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const id = link.getAttribute("href");
            const seccion = document.querySelector(id);

            const offset = 120; // altura navbar
            const posicion = seccion.offsetTop - offset;

            window.scrollTo({
                top: posicion,
                behavior: "smooth"
            });
        });
    });
}