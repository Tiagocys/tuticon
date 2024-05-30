/*encodeURIComponent()*/

var bt_imóveis = document.getElementById('bt-imóveis');
var bt_parcela = document.getElementById('bt-parcela');
var bt_crédito = document.getElementById('bt-crédito');
var bt_veículos = document.getElementById('bt-veículos');
var bt_serviços = document.getElementById('bt-serviços');
var bt_enviar_motivo = document.getElementById('bt-enviar-motivo');
var bt_casas = document.getElementById('bt-casas')
var bt_apartamentos = document.getElementById('bt-apartamentos');
var bt_outros_imóveis = document.getElementById('bt-outros-imóveis');
var bt_enviar_outros_imóveis = document.getElementById('enviar_outros_imóveis');
var bt_carros = document.getElementById('bt-carros');
var bt_motos = document.getElementById('bt-motos');
var bt_outros_veículos = document.getElementById('bt-outros-veículos');
var bt_enviar_outros_veículos = document.getElementById('bt-enviar-outros-veículos');
var bt_viagens = document.getElementById('bt-viagens');
var bt_reformas = document.getElementById('bt-reformas');
var bt_outros_serviços = document.getElementById('bt-outros-serviços');
var bt_enviar_outros_serviços = document.getElementById('bt-enviar-outros-serviços');

var range_valor = document.getElementById('range-valor');

/*----etapas----*/
var primeira_etapa = document.getElementById('simulador-etapa-1')
var etapa_plano = document.getElementById('simulador-etapa-1-motivo');
var etapa_imóveis = document.getElementById('simulador-etapa-1-motivo-imóvel');
var etapa_outros_imóveis = document.getElementById('simulador-etapa-1-motivo-imóvel-outro');
var etapa_veículos = document.getElementById('simulador-etapa-1-motivo-veículo');
var etapa_outros_veículos = document.getElementById('simulador-etapa-1-motivo-veículo-outro');
var etapa_serviços = document.getElementById('simulador-etapa-1-motivo-serviço');
var etapa_outros_serviços = document.getElementById('simulador-etapa-1-motivo-serviço-outro');
var segunda_etapa = document.getElementById('simulador-etapa-2');

/*----inputs----*/
var range = document.getElementById('range');
var input_nome = document.getElementById('input_nome');
var input_wtsp = document.getElementById('input_wtsp');
var input_email = document.getElementById('input_email');
var input_consórcio = document.getElementById('input-consórcio');
var input_carta = document.getElementById('input-carta');
var input_valor = document.getElementById('input-valor');
var redirect = document.getElementById('redirect');

/*----storage----*/


var imóvel = localStorage.getItem('imóvel');
var veículo = localStorage.getItem('veículo');
var serviço = localStorage.getItem('serviço');
var nome = localStorage.getItem('nome');
var whatsapp = localStorage.getItem('whatsapp');
var email = localStorage.getItem('email');
var valor = localStorage.getItem('valor');


window.addEventListener('load', function(){
    localStorage.clear();
    localStorage.setItem('consórcio', 'imóvel');
    localStorage.setItem('carta', 'parcela');
    localStorage.setItem('valor', '400');

    range.setAttribute('min', 400);
    range.setAttribute('max', 4000);
    range.setAttribute('step', 100);
    range.setAttribute('value', 400);
    range_valor.textContent = `R$ ${range.value}`;
    
    bt_imóveis.style.backgroundColor = '#b21319';
    bt_imóveis.style.color = 'white';
    bt_parcela.style.backgroundColor = '#b21319';
    bt_parcela.style.color = 'white';

    range.oninput = function(){
        range_valor.textContent = `R$ ${range.value}`;
    }
}) 

function valores(){
    var consórcio = localStorage.getItem('consórcio');
    var carta = localStorage.getItem('carta');
    if(consórcio === 'imóvel' && carta === "parcela"){
        range.setAttribute('min', 400);
        range.setAttribute('max', 4000);
        range.setAttribute('step', 100);
        range.setAttribute('value', 400);
        range_valor.textContent = `R$ ${range.value}`;
    } 
    else if(consórcio === 'imóvel' && carta === 'crédito'){
        range.setAttribute('min', 80000);
        range.setAttribute('max', 1000000);
        range.setAttribute('step', 10000);
        range.setAttribute('value', 80000);
        range_valor.textContent = `R$ ${range.value}`;
    }
    else if(consórcio === 'veículo' && carta === 'parcela'){
        range.setAttribute('min', 250);
        range.setAttribute('max', 2800);
        range.setAttribute('step', 50);
        range.setAttribute('value', 250);
        range_valor.textContent = `R$ ${range.value}`;
    }
    else if(consórcio === 'veículo' && carta === 'crédito'){
        range.setAttribute('min', 34000);
        range.setAttribute('max', 500000);
        range.setAttribute('step', 2000);
        range.setAttribute('value', 34000);
        range_valor.textContent = `R$ ${range.value}`;
    }
    else if(consórcio === 'serviço' && carta === 'parcela'){
        range.setAttribute('min', 350);
        range.setAttribute('max', 750);
        range.setAttribute('step', 50);
        range.setAttribute('value', 350);
        range_valor.textContent = `R$ ${range.value}`;
    }
    else {
        range.setAttribute('min', 15000);
        range.setAttribute('max', 30000);
        range.setAttribute('step', 1000);
        range.setAttribute('value', 15000);
        range_valor.textContent = `R$ ${range.value}`;
    }
}

bt_crédito.onclick = function(){
    localStorage.setItem('carta', 'crédito');
    bt_crédito.style.color = 'white';
    bt_crédito.style.backgroundColor = '#b21319';
    bt_parcela.style.color = 'black';
    bt_parcela.style.backgroundColor = 'gainsboro';
    valores();
}

bt_parcela.onclick = function(){
    localStorage.setItem('carta', 'parcela');
    bt_parcela.style.color = 'white';
    bt_parcela.style.backgroundColor = '#b21319';
    bt_crédito.style.color = 'black';
    bt_crédito.style.backgroundColor = 'gainsboro';
    valores();
}

bt_veículos.onclick = function(){
    localStorage.setItem('consórcio','veículo');
    bt_veículos.style.color = 'white';
    bt_veículos.style.backgroundColor = '#b21319';
    bt_imóveis.style.color = 'black';
    bt_imóveis.style.backgroundColor = 'gainsboro';
    bt_serviços.style.color = 'black';
    bt_serviços.style.backgroundColor = 'gainsboro';
    valores();
}

bt_imóveis.onclick = function(){
    localStorage.setItem('consórcio','imóvel');
    bt_imóveis.style.color = 'white';
    bt_imóveis.style.backgroundColor = '#b21319';
    bt_veículos.style.color = 'black';
    bt_veículos.style.backgroundColor = 'gainsboro';
    bt_serviços.style.color = 'black';
    bt_serviços.style.backgroundColor = 'gainsboro';
    valores();
}

bt_serviços.onclick = function(){
    localStorage.setItem('consórcio','serviço');
    bt_serviços.style.color = 'white';
    bt_serviços.style.backgroundColor = '#b21319';
    bt_imóveis.style.color = 'black';
    bt_imóveis.style.backgroundColor = 'gainsboro';
    bt_veículos.style.color = 'black';
    bt_veículos.style.backgroundColor = 'gainsboro';
    valores();
}

bt_enviar_motivo.onclick = function(){
    localStorage.setItem('valor', range.value);
    primeira_etapa.style.display = 'none';
    segunda_etapa.style.display = 'block';
    input_carta.value = localStorage.getItem('carta');
    input_consórcio.value = localStorage.getItem('consórcio');
    input_valor.value = localStorage.getItem('valor');
}

var pedido_final = document.getElementById('pedido_final');
pedido_final.onclick = function(){
    var frase = `Olá! Me chamo ${input_nome.value}, e preciso de uma carta de crédito para um ${localStorage.getItem('consórcio')} com valor de ${localStorage.getItem('carta')} de R$${localStorage.getItem('valor')}.`;
    var frase_codificada = encodeURIComponent(frase);
    redirect.value = `https://api.whatsapp.com/send?phone=5581991839830&text=${frase_codificada}`;
}

