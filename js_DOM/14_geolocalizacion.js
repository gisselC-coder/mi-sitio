// Ejercicio 14 - Geolocalización 
export function geolocalizacion() {
    const geo = document.getElementById("geolocation");

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
            <a class="link" 
            href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" 
            target="_blank" rel="noopener">
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