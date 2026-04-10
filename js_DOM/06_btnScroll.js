// Ejercicio 6 - Botón de Scroll
export function btnScroll(){
    const scroll = document.querySelector(".btnScroll");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 0) {
            scroll.style.display = "flex";
        } else {
            scroll.style.display = "none";
        }
    });

    scroll.addEventListener("click", () => {
        scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}