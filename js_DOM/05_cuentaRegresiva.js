// Ejercicio 5 - Cuenta Regresiva
export function cuentaRegresiva(fechaObjetivo) {
    const cuenta = document.getElementById("cuentaRegresiva");
    if (!cuenta) return;

    const limite = new Date(fechaObjetivo).getTime();

    const actualizar = () => {
        const ahora = new Date().getTime();
        const tiempoRestante = limite - ahora;

        if (tiempoRestante <= 0) {
            cuenta.innerHTML = "<h3>El año ha terminado!!!</h3>";
            clearInterval(contador);
            return;
        }

        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
        const segundos = Math.floor((tiempoRestante / 1000) % 60);

        cuenta.innerHTML = `<h3>
            Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s 
            para acabar el año
        </h3>`;
    };

    actualizar();
    const contador = setInterval(actualizar, 1000);
}