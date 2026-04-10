// Ejercicio 18 - ScrollSpy
export function scrollSpy() {
    const sections = document.querySelectorAll("section[data-scroll-spy]");
    const links = document.querySelectorAll(".panel a[data-scroll-spy]");

    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.panel a[href="#${id}"]`);

            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove("activo"));
                if (link) link.classList.add("activo");
            }
        });
    };
    const observer = new IntersectionObserver(cb, {
        rootMargin: "-160px 0px -80% 0px",
        threshold: 0
    });

    sections.forEach(el => observer.observe(el));
}