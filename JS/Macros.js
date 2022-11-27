var inputs = document.querySelectorAll('input');
var input_list = Array.from(inputs);
input_list.push(document.querySelector('#exercicios')); /* colocando o select exercicios na array */
input_list.push(document.querySelector('#objetivo')); /* colocando o select objetivo na array */
var button = document.querySelector('#btn-calc');
input_list.push(document.querySelector('#btn-calc')); /* colocando o botao "calcular" nessa array */ 

/* index do vetor

vetor:
[0] input sexo F
[1] input sexo M
[2] input idade
[3] input altura
[4] input peso
[5] num refeições
[6] select nivel de exercicio
[7] select objetivo
[8] botao de calcular
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

input_list[6].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[7].focus();
    }
});

input_list[7].addEventListener("keypress", function(x){
    if (x.key == "Enter"){
        input_list[8].focus();
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
        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'top'}); 
    }
});

var ph_visivel = true; /* o placeholder do resultado está visivel ?? sempre será true até que haja um calculo */ 

function calcularMacros(){

    let sexo = document.querySelector('input[name="sexo"]:checked').value
    let idade = document.querySelector('#idade').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let nivel_ex = document.querySelector('#exercicios').value
    let objetivo = document.querySelector('#objetivo').value
    let refeicoes = document.querySelector('#refeicoes').value

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
        } else {
            tmb = (10*peso)+(6.25*altura)-(5*idade)-161
            ndc = nivel_ex*(tmb)
        }

        if(objetivo == 'ganhar'){
            ndc += ndc*0.10
        } else if (objetivo == 'perder'){
            ndc -= ndc*0.20
        }

        ndc = ndc.toFixed(2)
        let proteina = Math.round((peso*2)*4)
        let gordura = Math.round((peso*0.7)*9)
        let carboidratos = Math.round(ndc-(proteina+gordura))
    
        let kcal_refeicao = Math.round(ndc/refeicoes)
        let prot_refeicao = Math.round(proteina/refeicoes)
        let gord_refeicao = Math.round(gordura/refeicoes)
        let carb_refeicao = Math.round(carboidratos/refeicoes)
        let fibra_refeicao = Math.round(130/refeicoes)

        document.querySelector('#consumo-kcal').innerHTML = ndc
        document.querySelector('#result-prot').innerHTML = proteina+" Kcal"
        document.querySelector('#result-gord').innerHTML = gordura+" Kcal"
        document.querySelector('#result-carb').innerHTML = carboidratos+" Kcal"

        document.querySelector('#kcal-refeicao').innerHTML = kcal_refeicao
        document.querySelector('#refeicao-prot').innerHTML = prot_refeicao+" Kcal"
        document.querySelector('#refeicao-gord').innerHTML = gord_refeicao+" Kcal"
        document.querySelector('#refeicao-carb').innerHTML = carb_refeicao+" Kcal"
        document.querySelector('#refeicao-fibra').innerHTML = fibra_refeicao+" Kcal";

        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'center'});
    }
}