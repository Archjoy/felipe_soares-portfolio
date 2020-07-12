const img = document.querySelector("img");
const content = document.querySelector(".content");

img.classList.toggle("ativo");
content.classList.toggle("ativo");

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const paragrafo = document.querySelector("p");
typeWriter(paragrafo);
