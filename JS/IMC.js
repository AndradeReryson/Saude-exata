/* fazendo com que ao dar enter em um campo ele automaticamente jogue você no proximo */
/* selecionado os inputs (campos para inserir numero, botões type=radio) */
var inputs = document.querySelectorAll('input');
var input_list = Array.from(inputs);
var button = document.querySelector('#btn-calc');
input_list.push(document.querySelector('#btn-calc')); /* colocando o botao "calcular" nessa array */ 

/* index do vetor

vetor:
[0] input sexo F
[1] input sexo M
[2] input idade
[3] input altura
[4] input peso
[5] botao de calcular
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

/* Pressionar ENTER no botão "calcular" realiza o click */ 
button.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        button.click();
        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'start'}); 
    }
});

var ph_visivel = true; /* o placeholder do resultado está visivel ?? sempre será true até que haja um calculo */ 

function calcularIMC(){
    
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let idade = document.querySelector('#idade').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    
    if (idade.length < 1 || altura.length < 1 || peso.length < 1){
        alert("Por favor, preencha todos os campos");
        document.querySelector('input[name="sexo"]:checked').focus();
    } else {

        if (ph_visivel == true){
            document.querySelector('.msg-resultado').classList.remove("invisible");
            document.querySelector('.placeholder').classList.add("invisible");
            ph_visivel = false;
        }

        altura = parseFloat(altura)
        peso = parseFloat(peso)
        
        var imc = peso / (altura**2);
        imc = imc.toFixed(2);
        var caption = "";
        var imagem = document.querySelector('#img_imc');

        //const peso_masculino = [18.5, 25, 30, 35, 40]
        //const peso_feminino = []

        if(idade > 18){
            if (imc < 18.5){
                caption = "Abaixo do peso";
                imagem.src = "IMGS/abaixopeso.svg";
            } else if (imc >= 18.5 && imc <= 24.9) {
                caption = "Peso Ideal";
                imagem.src = "IMGS/normal.svg";
            } else if (imc >= 25 && imc <= 29.9) {
                caption = "Sobrepeso";
                imagem.src = "IMGS/sobrepeso.svg";
            } else if (imc >= 30 && imc <= 34.9) {
                caption = "Obesidade Grau 1";
                imagem.src = "IMGS/obesidade-1.svg";
            } else if (imc >= 35 && imc <= 39.9) {
                caption = "Obesidade Grau 2";
                imagem.src = "IMGS/obesidade-2.svg";
            } else if (imc >= 40) {
                caption = "Obesidade Grau 3";
                imagem.src = "IMGS/obesidade-3.svg";
            }
        } else {
            if (imc < 15.1){
                caption = "Abaixo do peso";
                imagem.src = "IMGS/abaixopeso.svg";
            } else if (imc >= 15.1 && imc <= 22) {
                caption = "Peso Ideal";
                imagem.src = "IMGS/normal.svg";
            } else if (imc >= 22.1 && imc <= 25.6) {
                caption = "Sobrepeso";
                imagem.src = "IMGS/sobrepeso.svg";
            } else if (imc > 25.6) {
                caption = "Obesidade";
            }
        }

        document.querySelector('#imc_resultado').innerHTML = imc;
        document.querySelector('#imc_legenda').innerHTML = caption;

        document.querySelector('.msg-resultado').scrollIntoView({behavior:'smooth', block:'start'});

    }

}