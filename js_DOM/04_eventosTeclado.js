// Ejercicio 4 - Movimientos y Colisiones
export function eventosTeclado() {
    const ball = document.querySelector(".ball");
    const fondo = document.querySelector(".stage");
    let x = 0, y = 0;
    
    if (!ball || !fondo) return;

    document.addEventListener("keydown", (e) => {
        const limitBall = ball.getBoundingClientRect();
        const limitFondo = fondo.getBoundingClientRect();

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                if (limitBall.left > limitFondo.left) x--;
                break;
            case 38:
                e.preventDefault();
                if (limitBall.top > limitFondo.top) y--;
                break;
            case 39:
                e.preventDefault();
                if (limitBall.right < limitFondo.right) x++;
                break;
            case 40:
                e.preventDefault();
                if (limitBall.bottom < limitFondo.bottom) y++;
                break;
        }

        ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
}
