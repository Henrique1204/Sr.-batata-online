const inicial = document.querySelector("#inicial");
const introducao = document.querySelector("#introducao");
const questao = document.querySelector("#questao");
const pergunta = document.querySelector("#pergunta");
const p1 = document.querySelectorAll(".p1");
const p2 = document.querySelectorAll(".p2");
const p3 = document.querySelectorAll(".p3");
const p4 = document.querySelectorAll(".p4");
const p5 = document.querySelectorAll(".p5");
const p6 = document.querySelectorAll(".p6");
const p7 = document.querySelectorAll(".p7");
const p8 = document.querySelectorAll(".p8");
const p9 = document.querySelectorAll(".p9");
const p10 = document.querySelectorAll(".p10");
const erro = document.querySelector("#erro");
const piadoca = document.querySelector("#piadoca");
const piadoca2 =document.querySelector("#piadoca2");
const parabens = document.querySelector("#parabens");


document.getElementById("comeca").addEventListener("click", function(){
    inicial.style.display = "none";
    introducao.style.display = "flex";
});

document.getElementById("avancar").addEventListener("click", function(){
    introducao.style.display = "none";
    questao.style.display = "flex";
});

document.getElementById("tentarDeNovo1").onclick = function (){
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
    for( i = 0; i <3; i ++){
        p5[i].style.display = "none";
    }
    
}

document.getElementById("tentarDeNovo2").onclick = function (){
    erro.style.display = "none";
    questao.style.display = "flex";
    pergunta.innerHTML = "Qual o seu nível de inglês?";
    for( i = 0; i <3; i ++){
        p6[i].style.display = "flex";
    }
    for( i = 0; i <3; i ++){
        p7[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p8[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p9[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p10[i].style.display = "none";
    }
    
}

p1[0].onclick = function(){
    pergunta.innerHTML = "Quantas batatas se deve ter em casa?";
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
    pergunta.innerHTML = "De quantas formas podemos preparar a batata?";
    for( i = 0; i <3; i ++){
        p2[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p3[i].style.display = "flex";
    };
}

p3[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "5 é número impar, má sorte.";
}

p3[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Sr. Batata está decepcionado com você.";
}

p3[2].onclick = function(){
    pergunta.innerHTML = "O que falta pra batata ser perfeita?";
    for( i = 0; i <3; i ++){
        p3[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p4[i].style.display = "flex";
    };
}

p4[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Pessoas com pressão alta não poderão comer ela assim.";
}

p4[1].onclick = function(){
    pergunta.innerHTML = "Qual o melhor personagem de Toy Story?";
    for( i = 0; i <3; i ++){
        p4[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p5[i].style.display = "flex";
    };
}

p4[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Pessoas com diabetes não poderão comer ela assim.";
}

p5[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Isso não é uma competição de tiro.";
}

p5[1].onclick = function(){
    pergunta.innerHTML = "Qual o seu nível de inglês?";
    questao.style.backgroundColor = "white";
    pergunta.style.color = "black";
    pergunta.style.border = "solid 1px black";
    for( i = 0; i <3; i ++){
        p5[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p6[i].style.display = "flex";
    };

    erro.style.backgroundColor = "white";
    document.getElementById("tentarDeNovo1").style.display = "none";
    document.getElementById("tentarDeNovo2").style.display = "flex";
    document.getElementById("fase1").style.display = "none";
    document.getElementById("fase2").style.display = "flex";
}

p5[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca.innerHTML = "Coisas extintas são sem relevância.";
}

p6[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "interesting, Mr. Batat liked your interview, but still decided to disapprove you in the terview.";
    piadoca2.style.color = "black";
    
}

p6[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "interessante, Mr. Batata like your entrevist, but ainda assim decidiu to reprovar in the entrevist.";
    piadoca2.style.color = "black";
}

p6[2].onclick = function(){
    pergunta.innerHTML = "Batatinha quando nasce...";
    for( i = 0; i <3; i ++){
        p6[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p7[i].style.display = "flex";
    };
    document.getElementById("fase2").style.color = "black";
}

p7[0].onclick = function(){
    pergunta.innerHTML = "O que é melhor, batata ou paçoca?";
    for( i = 0; i <3; i ++){
        p7[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p8[i].style.display = "flex";
    };
}

p7[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Baguncinha é só em Los Angeles, California."; 
}

p7[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Sr. Batata é contra o abandono de menores."; 
}

p8[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Vamos pensar pelo lado filosófico, o que é ser melhor?"; 
}

p8[1].onclick = function(){
    pergunta.innerHTML = "Qual o melhor solo?";
    for( i = 0; i <3; i ++){
        p8[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p9[i].style.display = "flex";
    };
}

p8[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Obrigado pelo elogio."; 
}

p9[0].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Acho que minhas batatas não nasceriam muito bem nesse solo."; 
}

p9[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Acho que minhas batatas não aguentariam muita água."; 
}

p9[2].onclick = function(){
    pergunta.innerHTML = "Uma boa casa é feita de...";
    for( i = 0; i <3; i ++){
        p9[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p10[i].style.display = "flex";
    };
}

p10[0].onclick = function(){
    questao.style.display = "none";
    parabens.style.display = "flex";
}

p10[1].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "Seria muito difícil não comer essa casa, você não acha?"; 
}

p10[2].onclick = function(){
    questao.style.display = "none";
    erro.style.display = "flex";
    piadoca2.innerHTML = "OH NÃO!!! FOGO.";
}

document.getElementById("jogarDeNovo").onclick = function (){
    parabens.style.display = "none";
    introducao.style.display = "flex";
    pergunta.innerHTML = "Qual o melhor vegetal?";
    for( i = 0; i <3; i ++){
        p10[i].style.display = "none";
    }
    for( i = 0; i <3; i ++){
        p1[i].style.display = "flex";
    }    

    questao.style.backgroundColor = "black";
    pergunta.style.color = "white";
    pergunta.style.border = "solid 1px white";

    erro.style.backgroundColor = "black";
    document.getElementById("tentarDeNovo2").style.display = "none";
    document.getElementById("tentarDeNovo1").style.display = "flex";
    document.getElementById("fase2").style.display = "none";
    document.getElementById("fase2").style.color = "white";
    document.getElementById("fase1").style.display = "flex";
    
}