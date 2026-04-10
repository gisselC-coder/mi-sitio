// Ejercicio 17 - Carrusel 
export function carrusel() {
    const slides = document.querySelectorAll(".slide");
    let i = 0;
    document.addEventListener("click", (e) => {
        // anterior
        if (e.target.matches(".ant")) {
            e.preventDefault();

            slides[i].classList.remove("active");
            i--;

            if (i < 0) i = slides.length - 1;

            slides[i].classList.add("active");
        }
        // siguiente
        if (e.target.matches(".sig")) {
            e.preventDefault();

            slides[i].classList.remove("active");
            i++;

            if (i >= slides.length) i = 0;

            slides[i].classList.add("active");
        }
    });
}