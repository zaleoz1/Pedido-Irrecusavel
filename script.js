let botao = document.getElementById('nao');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

botao.addEventListener('mouseover', function () {
    botao.style.position = "absolute";
    botao.style.top = Math.random() * height + "px";
    botao.style.left = Math.random() * width + "px";
});
