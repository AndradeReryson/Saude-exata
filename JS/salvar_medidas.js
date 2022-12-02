document.addEventListener("DOMContentLoaded", function(){
    if("idade" in localStorage){
        if(localStorage.sexo == "Femi"){
            $('#F').click()
        } else if (localStorage.sexo == "Masc"){
            $('#M').click()
        }
        document.querySelector('#idade').value = parseInt(localStorage.idade)

        if("altura" in localStorage && localStorage.altura !== ''){
            document.querySelector('#altura').value = parseFloat(localStorage.altura)
        }
        
        document.querySelector('#peso').value = parseFloat(localStorage.peso)

        if("pescoco" in localStorage){
            try {
                document.querySelector('#pescoco').value = parseFloat(localStorage.pescoco)
                document.querySelector('#cintura').value = parseFloat(localStorage.cintura)
                document.querySelector('#quadril').value = parseFloat(localStorage.quadril)
            } catch {}
        }

        if("exercicios" in localStorage){
            try {
                $('#exercicios option[value="'+localStorage.exercicios+'"]').attr('selected','selected')
            } catch {}
        }

        if("objetivo" in localStorage){
            try {
                $('#objetivo option[value='+localStorage.objetivo+']').attr('selected','selected')
            } catch {}
        }

        if("refeicoes" in localStorage){
            try {
            document.querySelector('#refeicoes').value = parseFloat(localStorage.refeicoes)
            } catch {}
        }
        
    } 
})

let btn_salvar = document.querySelector('#btn-salvar')
btn_salvar.addEventListener("click", function(){

    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let idade = document.querySelector('#idade').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    

    try {
        let pescoco = document.querySelector('#pescoco').value
        localStorage.setItem('pescoco',pescoco)
    } catch {}


    try {
        let cintura = document.querySelector('#cintura').value
        localStorage.setItem('cintura',cintura)
    } catch {}

    try {
        let quadril = document.querySelector('#quadril').value
        localStorage.setItem('quadril',quadril)
    } catch {}

    try {
        let nivel_ex = document.querySelector('#exercicios').value
        localStorage.setItem('exercicios',nivel_ex)
    } catch {}
    
    try {
        let objetivo = document.querySelector('#objetivo').value
        localStorage.setItem('objetivo',objetivo)
    } catch {}
    
    try {
        let refeicoes = document.querySelector('#refeicoes').value
        localStorage.setItem('refeicoes',refeicoes)
    } catch {}
    

    localStorage.setItem('sexo',sexo)
    localStorage.setItem('idade',idade)
    localStorage.setItem('altura',altura)
    localStorage.setItem('peso',peso)

    // chama a caixa modal pra confirmar que foi salvo
    callModal("Seus dados foram salvos com sucesso")
})

btn_salvar.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        btn_salvar.click();
    }
});


/* botão de limpar os campos e o localStorage */

let btn_limpar = document.querySelector('#btn-limpar')
btn_limpar.addEventListener("click", function(){
    localStorage.clear()
    document.location.reload()
})

btn_limpar.addEventListener("keypress", function(x){
    if(x.key == "Enter"){
        btn_limpar.click();
    }
});

/* animação da caixa modal */
function callModal(texto, cor){
    $('#modal_text').text(texto)
    $('.modal-box').animate(
        {top: "3%"}, {duration: 500}
    ).animate(
        {top: "3%"},{duration: 3000}
    ).animate(
        {top: "-50%"}, {duration: 500}
    )
}



