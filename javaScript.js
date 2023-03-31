var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/u/g, "st").replace(/a/g, "py").replace(/i/g, "rl").replace(/o/g, "wh").replace(/e/g, "lm");
 
    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultCripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>'}

 function descriptografar(){  

    var texto = textInput.value;

    var resultDescripto = texto.replace(/st/g, "u").replace(/py/g, "a").replace(/rl/g, "i").replace(/wh/g, "o").replace(/lm/g, "e");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultDescripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>'}

function copiar(){

    var textoCop = document.getElementById('output-texto');

    textoCop.select();
    document.execCommand('copy');
    alert('Texto Copiado');
}