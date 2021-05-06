# O que é Node - é um interpretador javascript que roda fora dos navegadores
Node é muito leve, muito rapido, esra sendo utilizado fortemente no mercado
v8 é o interpretador do javascript (software que entende os códigos)
paypal, netflix e uber
###############################################################################
# Instala o node e vê no terminal
###############################################################################
# praticando com modulos (Modulos significa exportar e receber)
no arquivo caculadora.js:

function soma(a,b){
return a+b;
}

module.exports = soma;

no outro arquivo app.js
var soma = require("./calculadora");

console.log(soma(10,20));

AGORA no calculadora.js
module.exports = {
	function mult(a,b){
		return a * b;
	}
	function div(a,b){
		return a / b;
	}
}

e no app.js
var calculadora = require("./calculadora");
console.log(calculadora.mult(10, 20));

##################################################################################
var http = require("http"); //ja esta dentro do node
http.createServer().listen(8181); //aqui é o suficiente para criar um servidor http
console.log("Meu servidor rodando")
no terminal digite: node app.js //aqui vai rodar o teu app com o servidor criado
pra acessar o servidor http, voce vai no navegador e digita:
localhost:8181 //nada vai acontecer, mas vamos fazer o seguinte
http.createServer(function(requisicao, resposta){
    res.end("<h1>Bem vindo ao meu site</h1>");
}).listen(8181);
agora é so reiniciar o servidor e iniciar de novo e acessar o localhost:8181


