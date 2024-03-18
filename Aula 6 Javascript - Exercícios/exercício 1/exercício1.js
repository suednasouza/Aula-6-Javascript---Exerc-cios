/*Crie um botão que muda de cor com o seguinte
padrão:
Seu fundo deve ser azul quando o mouse
estiver afastado, verde quando estiver sobre
o botão e vermelho, exibindo a mensagem
“quebrei”, quando clicado. Depois de
“quebrado”, ele não deve mais modificar*/


let botão = document.querySelector("#botão");
botão.style.background="blue"; 
let estaQuebrado=false;

botão.addEventListener("mouseover", e =>{
    if(estaQuebrado===false)
    botão.style.background="green";
});

botão.addEventListener("mouseout", e =>{
    if(estaQuebrado===false)
    botão.style.background="blue";
});

botão.addEventListener("click", e =>{
    botão.style.background="red";
    botão.innerHTML="Muito bem!";
    estaQuebrado=true;
});