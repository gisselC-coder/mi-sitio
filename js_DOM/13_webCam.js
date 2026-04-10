// Ejercicio 13 - Detección de la WebCam
export function webCam() {
    const webcam = document.getElementById("webCam");

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