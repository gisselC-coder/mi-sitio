// Ejercicio 11 - User Agent
export function userDevice() {
    const userA = document.getElementById("user-dev");
    const ua = navigator.userAgent;
    //console.log(navigator.userAgent);
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
    if(isBrowser.chrome()) userA.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    if(isBrowser.edge()) userA.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`;
    if(isDesktop.windows()) userA.innerHTML += `<p><mark>Descarga nuestro Software para Windows</mark></p>`;
    if(isMobile.android()) userA.innerHTML += `<p><mark>Descarga nuestro Software para Android</mark></p>`;

    // redirecciones
    if(isMobile.ios()) window.location.href = "https://instagram.com/";
}