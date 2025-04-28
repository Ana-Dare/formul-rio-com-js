const botoes = document.querySelectorAll('.botoes');

function mostrarFeedback(){ 
    let valorfeedback = document.getElementById('feedback').value;
    if (valorfeedback.trim(' ')) alert(valorfeedback);
}

function limparFormulario() {
    document.getElementById('feedback').value = '';
}

function limparBotoes(){
    botoes.forEach(botao => botao.classList.remove('active'));
}

document.getElementById('send').addEventListener('click', function() {
    mostrarFeedback();
    limparFormulario();
    limparBotoes();
});

// método forEach (percorre a lsita )
botoes.forEach(botao => { //forEach percorrea a lista botoes. 
    botao.addEventListener('click', function () { //adiciona o evento de click e executa a função com botao como parâmetro
        if (this.classList.contains('active')) { //verifica se o botao clicado contém a classe activa
            this.classList.remove('active'); //se ela tiver, irá remover
        } else {
            botoes.forEach(botao => botao.classList.remove('active')); //forEach percorre a lsita botoes e remove a classe active dos botões
            this.classList.add('active'); //e adiciona apenas no botao selecionado
        }
    });
});

/* testando função forEach
const botoes = document.querySelectorAll('.botoes'); 
const botao1 = document.getElementById('happy');
const botao2 = document.getElementById('sad');

botao1.addEventListener('click', testar1);
botao2.addEventListener('click', testar2);

function testar1() {
    botoes.forEach(function(botao) {
        botao.classList.remove('active');
    });
    botao1.classList.add('active');
}

function testar2() {
    botoes.forEach(function(botao) {
        botao.classList.remove('active');
    });
    botao2.classList.add('active');
}
*/



/*button testando 
const botao1 = document.getElementById('happy');
const botao2 = document.getElementById('sad');

document.getElementById('happy').addEventListener('click', verficar)
document.getElementById('sad').addEventListener('click', verficar)



function clicarHappy() {
    botao1.classList.toggle('active');
}


function clicarHappy() {
    botao2.classList.toggle('active');
}

function verficar(event){
    const button = event.target.classList.contains('sad') ? 'sad' : 'happy'

    const isHappyActive = botao1.classList.contains('active');
    const isSadActive = botao2.classList.contains('active');

    if (button === 'sad' && !isSadActive) {
        botao2.classList.add('active');
        botao1.classList.remove('active');

    } else {
        botao2.classList.remove('active');
    }

    if (button === 'happy' && !isHappyActive) {
        botao2.classList.remove('active');
        botao1.classList.add('active');
    } else {
        botao1.classList.remove('active');
    }
}
    */





    

    
    

  

