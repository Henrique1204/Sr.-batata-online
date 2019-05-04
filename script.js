const inicial = document.querySelector("#inicial");
const introducao = document.querySelector("#introducao");
const questao = document.querySelector("#questao");
const pergunta = document.querySelector("#pergunta");
const p1 = document.querySelectorAll(".p1");
const p2 = document.querySelectorAll(".p2");
const p3 = document.querySelectorAll(".p3");
const erro = document.querySelector("#erro");
const piadoca = document.querySelector("#piadoca");
let i = 0;


document.getElementById("comeca").addEventListener("click", function(){
    inicial.style.display = "none";
    introducao.style.display = "flex";
});

document.getElementById("avancar").addEventListener("click", function(){
    introducao.style.display = "none";
    questao.style.display = "flex";
});

document.getElementById("tentarDeNovo").onclick = function (){
    erro.style.display = "none";
    questao.style.display = "flex";
    pergunta.innerHTML = "Qual o melhor vegetal?";
    for( i = 0; i <3; i ++){
        p1[i].style.display = "flex";
    }
    for( i = 0; i <3; i ++){
        p2[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p3[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p4[i].style.display = "none";
    }

}

p1[0].onclick = function(){
    pergunta.innerHTML = "Quantas batatas se deve ter em casa?"
    for( i = 0; i <3; i ++){
        p1[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p2[i].style.display = "flex";
    }
}

p1[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Cenoura só é bom no bolo.";
}

p1[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Alface??? Come gram logo de uma vez.";
}

p2[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Você gostaria da sua espécie sendo vendida dentro de sacos?";
}

p2[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Por que mil gramas e não mil batatas?";
}

p2[2].onclick = function(){
    pergunta.innerHTML = "De quantas formas podemos preparar a batata?"
    for( i = 0; i <3; i ++){
        p2[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p3[i].style.display = "flex";
    };
}