const status_ = document.querySelector('#status');
const status_valor = document.querySelector('#status-valor');
const palpites = document.querySelector('#display-palpites');
const palpite = document.querySelector('#palpite');
const imagem = document.querySelector('#imagem');


let numero_premiado = 0;
let tentativas_restantes = 0;
let valor_palpite = '';
let resposta_validada = false;
let lista_de_palpites = [];

function validar_palpites(num){
    resposta_validada = false;
    if(num.includes('.') || num.includes(',') || num.includes('-') || num.includes('+') || num ==''){
        alert('Use apenas números');
    }else if(num<1 || num>100){
        alert('Escreva um número entre 1 e 100.');
    }else if(lista_de_palpites.includes(num)){
        alert('Humm... Esse palpite já existe.');
    }else{
        resposta_validada = true;
    }return resposta_validada;
}

function atualizar_num_palpites(num){
    tentativas_restantes--;
    status_valor.innerHTML = `${tentativas_restantes}`;
    lista_de_palpites.push(num);
    if(palpites.innerHTML == ''){
        palpites.innerHTML = num;
    }else{
        palpites.innerHTML += ` - ${num}`
    }
}

function calcular_resultado(num){
    if (num < numero_premiado){
        alert('O seu palpite está abaixo.');
    }else if (num > numero_premiado){
        alert('O seu palpite está acima.');
    }else{
        status_.innerHTML = "Parabéns o número é: ";
        status_valor.innerHTML = numero_premiado;
        alert('Você ganhou! Pressione Enter para reiniciar o jogo.')
    }
    // TEM QUE TESTAR NO 'ATUALIZAR NUM PALPITES' SE É A ÚLTIMA TENTATIVA
}


function palpitar(){
    valor_palpite = palpite.value;
    if(validar_palpites(valor_palpite)){
        atualizar_num_palpites(valor_palpite);
        calcular_resultado(valor_palpite);
    }
}

function inicializar(){
    imagem.src = 'img/01.png';
    numero_premiado = Math.floor(Math.random() * 100) + 1;
    tentativas_restantes = 10;
    status_.innerHTML = 'Número restantes de tentativas: ';
    status_valor.innerHTML = `${tentativas_restantes}`;
    palpites.innerHTML = '';
}

inicializar();

palpite.addEventListener('keydown',function(tecla){
    if(tecla.key === "Enter"){
        palpitar();
    }
});