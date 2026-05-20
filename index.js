const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#btn-mudar');
const caixa = document.querySelector('#caixa-magica');
const texto = document.querySelector('#caixa-magica p');
let tamanhoAtual = 300; 
botao.addEventListener('click', () => {
  titulo.innerText = "DOM Manipulado com sucesso";
  titulo.style.color = "purple";
  document.body.style.backgroundColor = "#f0f0f0";
}); 
window.addEventListener('keydown', (event) => {
  console.log("Você apertou a tecla " + event.key);
  const tecla = event.key.toLowerCase();
  if (tecla === "r") {
    titulo.style.color = "red";
    titulo.innerText = "Você apertou a tecla R";
    caixa.innerText = event.key;
    caixa.style.backgroundColor = "#e02b2b";
    caixa.style.display = "flex";
    caixa.style.justifyContent = "center";
    caixa.style.alignItems = "center";
  } else if (tecla === "b") {
    titulo.style.color = "blue";
    titulo.innerText = "Você apertou a tecla B";
    caixa.innerText = event.key;
    caixa.style.backgroundColor = "#2e3ae2";
    caixa.style.display = "flex";
    caixa.style.justifyContent = "center";
    caixa.style.alignItems = "center";
  } else if (tecla === "g") {
    titulo.style.color = "green";
    titulo.innerText = "Você apertou a tecla G";
    caixa.innerText = event.key;
    caixa.style.backgroundColor = "#2ee249";
    caixa.style.display = "flex";
    caixa.style.justifyContent = "center";
    caixa.style.alignItems = "center";
  } else if (event.key === "Enter") {
    tamanhoAtual += 50;
  } else if (event.key === "Shift") {
    tamanhoAtual -= 50;
  } else if (event.key === "Backspace") {
    event.preventDefault();
    caixa.innerText = " ";
  }
  caixa.style.width = tamanhoAtual + "px";
  caixa.style.height = tamanhoAtual + "px";
});