/* menu de hamburger para mobile */
let burger_icon = document.querySelector('.burger-icon');
let burger_menu = document.querySelector('.burger-menu'); 

let burger_visible = false;

function toggle_burger(){

    if (burger_visible == false){
        burger_menu.style.height = "100%"
        document.getElementsByTagName('body')[0].style.overflow = 'hidden' /* trava o scroll */
        burger_visible = true;
    } else {
        burger_menu.style.height = "0"
        document.getElementsByTagName('body')[0].style.overflow = 'visible' /* destrava o scroll */
        burger_visible = false;
    }

}

/* sub-menu calculadoras */

let btn_nav_calc = document.querySelector('#btn-nav-calculadoras')
let sub_menu_visivel = false

/* função pra esconder/mostrar o submenu "calculadoras "*/
btn_nav_calc.addEventListener("click", function(){
    if(sub_menu_visivel == false){
        document.querySelector('.menu li .sub-menu').style.height = "175%"
        sub_menu_visivel = true
    } else {
        document.querySelector('.menu li .sub-menu').style.height = "0%"
        sub_menu_visivel = false
    }
});

btn_nav_calc.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        btn_nav_calc.click(); /* navegação com tab: quando apertar enter efetuar o click */
    }
});


/* fazendo os botões da barra de acessibilidade clicaveis com enter quando recebem foco */
let contraste_on = document.querySelector('#btn-contraste-on')
let contraste_off = document.querySelector('#btn-contraste-off')
let font_mais = document.querySelector('#btn-font-plus')
let font_menos = document.querySelector('#btn-font-minus')

contraste_on.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        contraste_on.click();
    }
});

contraste_off.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        contraste_off.click();
    }
});

font_mais.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        font_mais.click();
    }
});

font_menos.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        font_menos.click();
    }
});

/* botões de aumentar/diminuir fonte */

/* pegando todos os elementos que tem a class='text' */
var class_text = document.querySelectorAll('.text');
var textos = Array.from(class_text);
var qnt_alter = 0;

function increaseFont(){
    if (qnt_alter < 3){
        for (i=0; i<textos.length; i++){
            /* descobre o valor atual da fonte */
            let style = window.getComputedStyle(textos[i], null).getPropertyValue('font-size');
            let font_size = parseFloat(style);
            let style_p = window.getComputedStyle(textos[i], null).getPropertyValue('padding');
            let padding = parseFloat(style_p)

            /* Soma 2px ao valor que ja existe */
            textos[i].style.fontSize = (font_size + 2)+ 'px'
            textos[i].style.padding = (padding + 1)+ 'px';
        }

        /* aumenta 1 na variavel de controle de quantas vezes ja houve aumento */
        qnt_alter += 1;
        console.log(qnt_alter);
    } else {
        return;
    }
}

function decreaseFont(){
    if (qnt_alter > 0){
        for (i=0; i<textos.length; i++){
            let style = window.getComputedStyle(textos[i], null).getPropertyValue('font-size');
            let font_size = parseFloat(style);
            let style_p = window.getComputedStyle(textos[i], null).getPropertyValue('padding');
            let padding = parseFloat(style_p)

            textos[i].style.fontSize = (font_size - 2)+ 'px';
            textos[i].style.padding = (padding - 1)+ 'px';
        }
        qnt_alter -= 1;
        console.log(qnt_alter);
    } else {
        return;
    }
}

/* Atalhos de teclado */

document.addEventListener('keydown', function(e){
    if(e.altKey && e.code == 'Digit1') {
        document.querySelector('#menu').focus();
    } else if (e.altKey && e.code == 'Digit2') {
        document.querySelector('#conteudo').focus();
    } else if (e.altKey && e.code == 'Digit3') {
        document.querySelector('#rodape').focus();
    } else if (e.altKey && e.code == 'Digit9') {
        contraste_on.click()
    } else if (e.altKey && e.code == 'Digit0') {
        contraste_off.click()
    } else if (e.altKey && e.code == 'Minus') {
        font_menos.click()
    } else if (e.altKey && e.code == 'Equal') {
        font_mais.click()
    }
});

/* Mascara para inputs */

$(document).ready(function(){
    $('#idade').mask('999')
    $('#altura').mask('9.99')
    $('#peso').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    })
    $('#pescoco').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    })
    $('#cintura').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    })
    $('#quadril').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    })
    $('#refeicoes').mask('99')
})

/*
$('#peso').on('input',function(){
    let tamanho = $('#peso').val()
    console.log(tamanho)
    console.log(tamanho.length)
    if(tamanho.length === 6){
        $('#peso').unmask()
    } else {
        
    }
})
*/

