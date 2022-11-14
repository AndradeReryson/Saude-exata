var inputs = document.querySelectorAll('input');
var input_list = Array.from(inputs);

var button = document.querySelector('#btn-calc');
input_list.push(document.querySelector('#btn-calc')); /* colocando o botao "calcular" nessa array */ 

//console.log(input_list)
/* index do vetor

vetor:
[0] input sexo F
[1] input sexo M
[2] input idade
[3] input altura
[4] input peso
[5] input pescoço
[6] input cintura 
[7] input quadril*
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

/* mostrando/ocultando o campo do quadril caso o sexo seja Masculino */
let caixa_sexo = document.querySelector('.box-radio-input')

caixa_sexo.addEventListener('change',function(){
    let sexo_selecionado = document.querySelector('input[name="sexo"]:checked').value
    if (sexo_selecionado == 'Femi'){
        $(document).ready(function(){
            $('.only-fem').show()
        }) 
    } else {
        $(document).ready(function(){
            $('.only-fem').hide()
        }) 
    }
})

/* Limitando o tamanho do input*/
function inputLimit(input, max){
    if (input.value.length > max) input.value = input.value.slice(0, max);
}

/* Pressionar ENTER no botão "calcular" realiza o click */ 

button.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        button.click();
        document.querySelector('input[name="sexo"]:checked').focus(); /* focus volta pro botão de sexo*/
    }
});

var ph_visivel = true; /* o placeholder do resultado está visivel ?? sempre será true até que haja um calculo */ 

function calcularBF(){
    

    let sexo = document.querySelector('input[name="sexo"]:checked').value
    let idade = document.querySelector('#idade').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let pescoco = document.querySelector('#pescoco').value
    let cintura = document.querySelector('#cintura').value
    let quadril = document.querySelector('#quadril').value


    if (idade.length < 1 || altura.length < 1 || peso.length < 1 || pescoco.length < 1 || cintura.length < 1){
        alert("Por favor, preencha todos os campos");
        document.querySelector('input[name="sexo"]:checked').focus();  
    } else {

        /* caso o sexo seja feminino o campo quadril vai ter que ser preenchido */
        if (sexo == 'Femi' && quadril.length < 1){
            alert("Por favor, preencha todos os campos");
            document.querySelector('input[name="sexo"]:checked').focus();
            return
        } 

        if (ph_visivel == true){
            document.querySelector('.msg-resultado').classList.remove("invisible");
            document.querySelector('.placeholder').classList.add("invisible");
            ph_visivel = false;
        }

        altura = parseFloat(altura)
        peso = parseFloat(peso)
        pescoco = parseFloat(pescoco)
        cintura = parseFloat(cintura)
        quadril = parseFloat(quadril)

        let bf_porcent = 0
        let bf_ideal = 0
        let bf_perder = 0
        let bf_categoria = 0

        if(sexo == "Masc"){
            bf_porcent = (495/(1.0324 - 0.19077*Math.log10(cintura-pescoco)+0.15456*Math.log10(altura)) )-450
            bf_porcent = bf_porcent.toFixed(2)

            if(idade<25){
                bf_ideal = 8.5
            } else if (idade>=25 && idade<30){
                bf_ideal = 10.5
            } else if (idade>=30 && idade<35){
                bf_ideal = 12.7
            } else if (idade>=35 && idade<40){
                bf_ideal = 13.7
            } else if (idade>=40 && idade<45){
                bf_ideal = 15.3
            } else if (idade>=45 && idade<50){
                bf_ideal = 16.4
            } else if (idade>=50 && idade<55){
                bf_ideal = 18.9
            } else if (idade>=55){
                bf_ideal = 20.9
            }

            bf_perder = (peso*bf_porcent) - (peso*bf_ideal)
            bf_perder = bf_perder * 0.01
            bf_perder = bf_perder.toFixed(1)

            if(bf_porcent<=5){
                bf_categoria = "Apenas Essencial"
            } else if (bf_porcent>=6 && bf_porcent<=13){
                bf_categoria = "Atleta"
            } else if (bf_porcent>=14 && bf_porcent<=17){
                bf_categoria = "Fitness"
            } else if (bf_porcent>=18 && bf_porcent<=24){
                bf_categoria = "Normal"
            } else if (bf_porcent>=25){
                bf_categoria =  "Obeso"
            }

        } else {
            bf_porcent = 495/(1.29579 - 0.35004*Math.log10(cintura+quadril-pescoco)+0.22100*Math.log10(altura))-450


            bf_porcent = bf_porcent.toFixed(2)


            if(idade<25){
                bf_ideal = 17.7
            } else if (idade>=25 && idade<30){
                bf_ideal = 18.4
            } else if (idade>=30 && idade<35){
                bf_ideal = 19.3
            } else if (idade>=35 && idade<40){
                bf_ideal = 21.5
            } else if (idade>=40 && idade<45){
                bf_ideal = 22.2
            } else if (idade>=45 && idade<50){
                bf_ideal = 22.9
            } else if (idade>=50 && idade<55){
                bf_ideal = 25.2
            } else if (idade>=55){
                bf_ideal = 26.3
            }

            bf_perder = (peso*bf_porcent) - (peso*bf_ideal)
            bf_perder = bf_perder * 0.01
            bf_perder = bf_perder.toFixed(1)

            if(bf_perder < 0){
                bf_perder = 0
            }

            if(bf_porcent<=13){
                bf_categoria = "Gordura Essencial"
            } else if (bf_porcent>=14 && bf_porcent<21){
                bf_categoria = "Atleta"
            } else if (bf_porcent>=21 && bf_porcent<25){
                bf_categoria = "Fitness"
            } else if (bf_porcent>=25 && bf_porcent<32){
                bf_categoria = "Normal"
            } else if (bf_porcent>=32){
                bf_categoria =  "Obesa"
            }

        }

        document.querySelector('#bf_porcent').innerHTML = bf_porcent+"%"
        document.querySelector('#bf_ideal').innerHTML = bf_ideal+"%"
        document.querySelector('#bf_perder').innerHTML = bf_perder+"Kg";
        document.querySelector('#bf_categoria').innerHTML = bf_categoria;

        /* controlando o scroll

        let element = document.querySelector('.conteudo');
        let coord_x = element.getBoundingClientRect().left;
        let coord_y = element.getBoundingClientRect().top;
        console.log(coord_x, coord_y);

        let  
        */

    }

}