// Ejercicio 22 - Narrador
export function narrador() {
  const voz = document.getElementById("voz");
  const texto = document.getElementById("leer-texto");  
  const btn = document.getElementById("leer-btn");
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();

    voz.innerHTML = "";

    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} - ${voice.lang}`;

      if (voice.default) {
        option.textContent += " - DEFAULT";
      }

      option.setAttribute("data-name", voice.name);
      option.setAttribute("data-lang", voice.lang);

      voz.appendChild(option);
    });
  });

  document.addEventListener("change", (e) => {
    if (e.target === voz) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === btn) {
      speechSynthesis.cancel();
      speechMessage.text = texto.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}