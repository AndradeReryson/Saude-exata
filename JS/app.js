/* menu de hamburger para mobile */
var burger_icon = document.querySelector('.burger-icon');
var burger_menu = document.querySelector('.burger-menu'); 

var burger_visible = false;

function toggle_burger(){

    if (burger_visible == false){
        burger_menu.classList.remove('invisible');
        burger_visible = true;
    } else {
        burger_menu.classList.add('invisible');
        burger_visible = false;
    }

}

/*
var sexo;
var idade;
var altura;
var peso;
*/


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

            /* Soma 2px ao valor que ja existe */
            textos[i].style.fontSize = (font_size + 2)+ 'px'
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

            textos[i].style.fontSize = (font_size - 2)+ 'px';
        }
        qnt_alter -= 1;
        console.log(qnt_alter);
    } else {
        return;
    }
}

/* Atalhos */

document.addEventListener('keydown', function(e){
    if(e.altKey && e.code == 'Digit1') {
        document.querySelector('#menu').focus();
    } else if (e.altKey && e.code == 'Digit2') {
        document.querySelector('#conteudo').focus();
    } else if (e.altKey && e.code == 'Digit3') {
        document.querySelector('#rodape').focus();
    }
});