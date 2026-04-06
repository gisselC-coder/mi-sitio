
function scrollMenu() {
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

// Ejercicio 1 - Botón hambrguesa
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".panel");
const navLinks = document.querySelectorAll(".panel a");

function toggleMenu() {
    navMenu.classList.toggle("activo");
    hamburger.classList.toggle("activo");
}

function closeMenu() {
    navMenu.classList.remove("activo");
    hamburger.classList.remove("activo");
}

// Ejercicio 2 - Reloj
const reloj = document.getElementById("reloj");
const playR = document.getElementById("iniciar-reloj");
const stopR = document.getElementById("detener-reloj");
let timer = null;

function iniciarReloj() {
    if (timer !== null) return;

    timer = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        reloj.innerHTML = `<h3>${clockHour}</h3>`;
    }, 1000);
    playR.disabled = true;
}

function detenerReloj() {
    clearInterval(timer);
    timer = null;

    reloj.innerHTML = "";
    playR.disabled = false;
}

// Ejercicio 3 - Alarma
const playA = document.getElementById("iniciar-alarma");
const stopA = document.getElementById("detener-alarma");
let alarm = null;
const sonido = new Audio("extras/alarma.mp3");

function iniciarAlarma() {
    if (alarm !== null) return;

    sonido.loop = true;
    sonido.play();

    alarm = true;
    playA.disabled = true;
}

function detenerAlarma() {
    sonido.pause();
    sonido.currentTime = 0;

    alarm = null;
    playA.disabled = false;
}

// Ejercicio 4 - Detectar teclas
function detectarTecla(e) {
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(e);

    if(e.key === "a" && e.altKey) {
        alert("Alerta con el teclado");
    } */
}

// Ejercicio 5 - Movimientos y Colisiones
const ball = document.querySelector(".ball");
const fondo = document.querySelector(".stage");
let x = 0, y = 0;

function mover(e) {
    const limitBall = ball.getBoundingClientRect();
    const limitFondo = fondo.getBoundingClientRect();
    //console.log(limitBall, limitStage);
    switch(e.keyCode) {
        case 37:
            // left
            e.preventDefault();
            if(limitBall.left > limitFondo.left) x--;
        break;
        case 38:
            // up
            e.preventDefault();
            if(limitBall.top > limitFondo.top)y--;
        break;
        case 39:
            // right
            e.preventDefault();
            if(limitBall.right < limitFondo.right)x++;
        break;
        case 40:
            // down
            e.preventDefault();
            if(limitBall.bottom < limitFondo.bottom)y++;
        break;
        default:
            break;
    }
    ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

// Ejercicio 6 - Cuenta Regresiva
const cuenta = document.getElementById("cuentaRegresiva");
function cuentaReg(fechaObjetivo) {
    const ahora = new Date().getTime();
    const limite = new Date(fechaObjetivo).getTime();
    const tiempoRestante = limite - ahora;

    if(tiempoRestante <= 0) {
        cuenta.innerHTML = "<h3>El año ha Terminado!!!</h3>";
        return;
    }
    
    let dias = Math.floor(tiempoRestante / (1000* 60 * 60 * 24));
    let horas = Math.floor(tiempoRestante / (1000* 60 * 60) % 24);
    let minutos = Math.floor(tiempoRestante / (1000* 60) % 60);
    let segundos = Math.floor(tiempoRestante / (1000) % 60);

    cuenta.innerHTML = `<h3>Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s para acabar el año</h3>`
}

let contador = null;
function iniciarCuenta() {
    if(contador !== null) return;

    contador = setInterval(() => {
        cuentaReg("2026-12-31 23:59:59");
    }, 1000);
}

// Ejercicio 7 - Botón de Scroll
const scroll = document.querySelector(".btnScroll");
function botonScroll(){
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

// Ejercicio 8 y 9 - Modo oscuro + localStorage
const btnDark = document.querySelector(".btn-dark");
function modoOscuro() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function cargarTema() {
    const theme = localStorage.getItem("theme");

    if(theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Ejericio 10 - Responsive
const breakpoint = window.matchMedia("(min-width: 768px)");

function responsive(e) {
    const contenedor = document.getElementById("insta-container");
    const mapa = document.getElementById("mapa-container");

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

// Ejercicio 11 - Responsive Tester
const form = document.getElementById("resTester");
const btnCerrar = document.querySelector("input[name='cerrar']");
let testerWindow = null;

function abrirTester(e) {
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
}

function cerrarTester() {
    console.log("Cerrar:", testerWindow);

    if (testerWindow) {
        testerWindow.close();
    }
}

// Ejercicio 12 - User Agent
const userA = document.getElementById("user-dev");
const ua = navigator.userAgent;
function userDevice() {
    //console.log(navigator.userAgent);
    //userA.textContent = navigator.userAgent;
    const isMobile = {
        android: () => /android/i.test(ua),
        ios: () => /iphone|ipad|ipod/i.test(ua),
        windows: () => /windows phone/i.test(ua),
        any: function() {
            return this.android() || this.ios() || this.windows();
        },
    };
    const isDesktop = {
        linux: () => /linux/i.test(ua),
        mac: () => /mac os/i.test(ua),
        windows: () => /windows nt/i.test(ua),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    };
    const isBrowser = {
        edge: () => /edg/i.test(ua),
        chrome: () => /chrome/i.test(ua) && !/edg/i.test(ua),
        safari: () => /safari/i.test(ua) && !/chrome/i.test(ua),
        firefox: () => /firefox/i.test(ua),
        any() {
            return this.edge() || this.chrome() || this.safari() || this.firefox();
        }
    };
    userA.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? "Móvil 📱" : "Desktop 💻"}</b></li>
            <li>Navegador: <b>
                ${isBrowser.chrome() ? "Chrome" :
                  isBrowser.firefox() ? "Firefox" :
                  isBrowser.safari() ? "Safari" :
                  isBrowser.edge() ? "Edge" : "Otro"}
            </b></li>
        </ul>
    `;

    // contenido exclusivo
    if(isBrowser.chrome()) {
        userA.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }
    if(isBrowser.edge()) {
        userA.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`;
    }
    if(isDesktop.windows()) {
        userA.innerHTML += `<p><mark>Descarga nuestro Software para Windows</mark></p>`;
    }
    if(isMobile.android()) {
        userA.innerHTML += `<p><mark>Descarga nuestro Software para Android</mark></p>`;
    }

    // redirecciones
    if(isMobile.ios()) {
        //window.location.href = "https://instagram.com/";
    }
}

// Ejercicio 13 - Estado de la red
function estadoRed() {
    const online = () => {
        const div = document.createElement("div");

        if(navigator.onLine) {
            div.textContent = "Conectado a la Red ✔️";
            div.classList.add("online");
            div.classList.remove("offline");
        } else {
            div.textContent = "Sin conexión a la Red ✖️";
            div.classList.add("offline");
            div.classList.remove("online");
        }
        document.body.insertAdjacentElement("afterbegin", div);
        setTimeout(() => document.body.removeChild(div), 2000);
    };
    online();
    window.addEventListener("online", online);
    window.addEventListener("offline", online);
}

// Ejercicio 14 - Detección de la WebCam
const webcam = document.getElementById("webCam");
function iniciarWebCam() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            webcam.srcObject = stream;
            webcam.play();
        })
        .catch(err => {
            webcam.insertAdjacentHTML(
                "beforebegin",
                `<p style="font-size: 15px;"><mark>Error: ${err.message}</mark></p>`
            );
        });
}

// Ejercicio 15 - Geolocalización 
const geo = document.getElementById("geolocation");
function obtenerUbi() {
    const options = {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0
    };

    const success = (position) => {
        const coords = position.coords;

        geo.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <br>
            <a class="link" href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">
                📍 Ver en Google Maps
            </a>
        `;
    };

    const error = (err) => {
        geo.innerHTML = `
            <p><mark>Error ${err.code}: ${err.message}</mark></p>
        `;
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
}

// Ejercicio 16 - Filtros de Búsqueda

function filters(input, selector) {
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

// Ejercicio 16 - Sorteo Digital
function sorteoD(btn, selector) {
    function obtenerGanador () {
        const players = document.querySelectorAll(selector);
        const random = Math.floor(Math.random() * players.length);
        const ganador = players[random];

        return { texto: ganador.textContent, elemento: ganador }
    }
    document.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            const result = obtenerGanador();

            result.elemento.classList.add("winner");
            
            setTimeout(() => {
                alert(`El ganador es: ${result.texto}`);

                result.elemento.classList.remove("winner");
            }, 100);
        }
    });
}

// Ejercicio 17 - Carrusel 
function slider() {
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

// Ejercicio 18 - ScrollSpy
function scrollSpy() {
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

// Ejercicio 19 - Video Inteligente
function videoInteligente() {
    const videos = document.querySelectorAll("video[data-smart-video]");

    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", (e) => 
                document.visibilityState === "visible"
                ? entry.target.play()
                : entry.target.pause()
            );
        });
    };

    const observer = new IntersectionObserver(cb, {
        threshold: 0.5
    });

    videos.forEach((el) => observer.observe(el));
    
}

// Ejercicio 20 - Validacion de formulario
function validarForm() {
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

function initEvents() {
    scrollMenu();

    hamburger.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    playR.addEventListener("click", iniciarReloj);
    stopR.addEventListener("click", detenerReloj);

    playA.addEventListener("click", iniciarAlarma);
    stopA.addEventListener("click", detenerAlarma);

    document.addEventListener("keydown", detectarTecla);
    document.addEventListener("keydown", mover);

    iniciarCuenta();

    botonScroll();

    btnDark.addEventListener("click", modoOscuro);
    cargarTema();

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);

    form.addEventListener("submit", abrirTester);
    btnCerrar.addEventListener("click", cerrarTester);

    userDevice();
    
    estadoRed();

    iniciarWebCam();

    obtenerUbi();
    
    filters("#buscador", ".card");

    sorteoD("#sortear", ".player");

    slider();

    scrollSpy();

    videoInteligente();

    validarForm();
}


initEvents();
