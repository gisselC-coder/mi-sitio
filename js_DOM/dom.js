import { scrollMenu } from "../scrollMenu.js";
import { btnHamburguesa } from "./01_btnHamburguesa.js";
import { reloj } from "./02_reloj.js";
import { alarma } from "./03_alarma.js";
import { eventosTeclado } from "./04_eventosTeclado.js";
import { cuentaRegresiva } from "./05_cuentaRegresiva.js";
import { btnScroll } from "./06_btnScroll.js";
import { modoOscuro } from "./07-08_theme-LS.js";
import { responsivo } from "./09_responsivo.js";
import { responsiveTester } from "./10_responsiveTester.js";
import { userDevice } from "./11_deteccionDisps.js";
import { estadoRed } from "./12_estadoRed.js";
import { webCam } from "./13_webCam.js";
import { geolocalizacion } from "./14_geolocalizacion.js";
import { filtrosBusqueda } from "./15_filtrosBusqueda.js";
import { sorteoDigital } from "./16_sorteoDigital.js";
import { carrusel } from "./17_carrusel.js";
import { scrollSpy } from "./18_scrollSpy.js";
import { smartVideo } from "./19_smartVideo.js";
import { formulario } from "./20-21_formulario.js";
import { narrador } from "./22_narrador.js";

document.addEventListener("DOMContentLoaded", () => {
    scrollMenu();
    btnHamburguesa();
    reloj();
    alarma();
    eventosTeclado();
    cuentaRegresiva("2026-12-31 23:59:59");
    btnScroll();
    modoOscuro();
    responsivo();
    responsiveTester();
    userDevice();
    estadoRed();
    webCam();
    geolocalizacion();
    filtrosBusqueda("#buscador", ".card");
    sorteoDigital("#sortear", ".player");
    carrusel();
    scrollSpy();
    smartVideo();
    formulario();
    narrador();
});

// Ejercicio - Detectar teclas
/* function detectarTecla(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(e);

    if(e.key === "a" && e.altKey) {
        alert("Alerta con el teclado");
    }
} */
