/*Crie uma calculadora com as quatro operações
básicas utilizando JavaScript
Utilize dois campos input para o preenchimento
dos valores, um campo select para a seleção da
operação desejada, um campo div para resposta
e um button para solicitar o cálculo
document.getElementById("campoTexto").value
= "10";
parseInt("5");*/

const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
let resultado = document.querySelector("#resultado");

botao.addEventListener("click",calcular);

function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    if(operacao==="somar")
        resultado.innerHTML = valor1 + valor2;
    if(operacao==="subtrair")
        resultado.innerHTML = valor1 - valor2;
   if(operacao==="multiplicar")
        resultado.innerHTML = valor1 * valor2;
    if(operacao==="dividir")
        resultado.innerHTML = valor1 / valor2;
}