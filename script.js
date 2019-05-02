const inicial = document.querySelector("#inicial");
const introducao = document.querySelector("#introducao");
const pergunta1 = document.querySelector("#p1");

document.getElementById("comeca").addEventListener("click", function(){
    inicial.style.display = "none";
    introducao.style.display = "flex";
});

document.getElementById("avancar").addEventListener("click", function(){
    introducao.style.display = "none";
    pergunta1.style.display = "flex";
});