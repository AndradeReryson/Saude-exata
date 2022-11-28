var inputs = document.querySelectorAll('input');
var input_list = Array.from(inputs);
var select = document.querySelector('#exercicios')
input_list.push(document.querySelector('#exercicios')); /* colocando o select na array */

var button = document.querySelector('#btn-calc');
input_list.push(document.querySelector('#btn-calc')); /* colocando o botao "calcular" nessa array */ 

/* index do vetor

vetor:
[0] input sexo F
[1] input sexo M
[2] input idade
[3] input altura
[4] input peso
[5] select nivel de exercicio
[6] botao de calcular
*/

input_list[0].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[2].focus();
    }
}); 

input_list[1].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[2].focus();
    }
}); 

input_list[2].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[3].focus();
    }
}); 

input_list[3].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[4].focus();
    }
}); 

input_list[4].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[5].focus();
    }
}); 

input_list[5].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[6].focus();
    }
}); 

/* Limitando o tamanho do input*/
function inputLimit(input, max){
    if (input.value.length > max) input.value = input.value.slice(0, max);
}


/* Pressionar ENTER no botão "calcular" realiza o click */ 

button.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        button.click();
        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'start'}); 
    }
});

var ph_visivel = true; /* o placeholder do resultado está visivel ?? sempre será true até que haja um calculo */ 

function calcularTMB(){
    

    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let idade = document.querySelector('#idade').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let nivel_ex = document.querySelector('#exercicios').value;

    nivel_ex = parseFloat(nivel_ex)

    if (idade.length < 1 || altura.length < 1 || peso.length < 1){
        alert("Por favor, preencha todos os campos");
        document.querySelector('input[name="sexo"]:checked').focus();
    } else {

        if (ph_visivel == true){
            document.querySelector('.msg-resultado').classList.remove("invisible");
            document.querySelector('.placeholder').classList.add("invisible");
            ph_visivel = false;
        }

        idade = parseInt(idade)
        altura = parseFloat(altura)
        peso = parseFloat(peso)
        
        let ndc = 0
        let tmb = 0

        if(sexo == "Masc"){
            tmb = (10*peso)+(6.25*altura)-(5*idade)+5
            ndc = nivel_ex*(tmb)
            /* formatando numero */
            tmb = tmb.toFixed(2)
            ndc = ndc.toFixed(2)
        } else {
            tmb = (10*peso)+(6.25*altura)-(5*idade)-161
            ndc = nivel_ex*(tmb)
            /* formatando numero */
            tmb = tmb.toFixed(2)
            ndc = ndc.toFixed(2)
        }

        document.querySelector('#tmb_resultado').innerHTML = tmb;
        document.querySelector('#ndc_resultado').innerHTML = ndc;

        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'start'});

    }

}