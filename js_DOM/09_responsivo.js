// Ejericio 9 - Responsive
export function responsivo() {
    const contenedor = document.getElementById("insta-container");
    const mapa = document.getElementById("mapa-container");

    const e = window.matchMedia("(min-width: 1024px)");

    if (e.matches) {
        // instagram
        contenedor.innerHTML = `
            <blockquote class="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DKGSRjatYL4/">
            </blockquote>
        `;
        if (window.instgrm) window.instgrm.Embeds.process();

        // mapa
        if (!mapa.querySelector("iframe")) {
            mapa.innerHTML = `
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53119.75617137528!2d-89.630937830907!3d20.930137523636642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5672584555ead7%3A0x2e130faa3249905c!2sAeropuerto%20Internacional%20de%20M%C3%A9rida!5e0!3m2!1ses-419!2smx!4v1774837227603!5m2!1ses-419!2smx" 
                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            `;
        } 

    } else {
        // instagram
        contenedor.innerHTML = `
            <a class="link" href="https://www.instagram.com/p/DKGSRjatYL4/" target="_blank">
                📷 Ver en Instagram
            </a>
        `;
        // mapa
        mapa.innerHTML = `
            <a class="link" href="https://www.google.com/maps?q=Aeropuerto+de+Mérida" target="_blank">
                📍 Ver en Google Maps
            </a>
        `;
    }
}