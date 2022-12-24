const vocales = ["a", "e", "i", "o", "u"];
const vocalesInter = ["ai", "enter", "imes", "ober", "uf"];
let letrasSeparadas = "";
function separar() {
  letrasSeparadas = texto.value.split("");
}
function encriptar() {
  document.getElementById("ocultar").style.display = "none";
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}
var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
  document.getElementById("ocultar").style.display = "none";
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}
var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function copiar() {
    document.f1.campo1.select()
    var res = document. execCommand('copy')
}
