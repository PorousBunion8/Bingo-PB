var jogadores = [];
var numeros_sorteados = [];
function gerarNumerosAleatorios(quantidade, min, max) {
  if (quantidade > (max - min + 1)) {
    console.log("Intervalo insuficiente...");
    return;
  }

  var numeros = [];

  while (numeros.length < quantidade) {
    var aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    if (!numeros.includes(aleatorio)) {
      numeros.push(aleatorio);
    }
  }

  return numeros;
}

function gerarCartela() {
  var nomeJogador = prompt('Digite o nome do jogador');

  var cartela = [
    gerarNumerosAleatorios(5, 1, 15),
    gerarNumerosAleatorios(5, 16, 30),
    gerarNumerosAleatorios(5, 31, 45),
    gerarNumerosAleatorios(5, 46, 60),
    gerarNumerosAleatorios(5, 61, 75)
  ];

  jogadores.push({
    nomeJogador: nomeJogador,
    cartela: cartela
  });

  desenharCartela(nomeJogador, cartela);

  console.log(jogadores);
}

function desenharCartela(nome, cartela) {
    var div = document.getElementById('espaco_cartelas');
  
    var tabela = document.createElement('table');
  
    var thead = document.createElement('thead');
  
    var tr_nome = document.createElement('tr');
    var td_nome = document.createElement('td');
    td_nome.setAttribute('colspan', '5');
    td_nome.innerText =  nome; // Exibe o nome do jogador
    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);
  
    var thB = document.createElement('th');
    thB.innerText = 'B';
    var thI = document.createElement('th');
    thI.innerText = 'I';
    var thN = document.createElement('th');
    thN.innerText = 'N';
    var thG = document.createElement('th');
    thG.innerText = 'G';
    var thO = document.createElement('th');
    thO.innerText = 'O';
  
    thead.appendChild(thB);
    thead.appendChild(thI);
    thead.appendChild(thN);
    thead.appendChild(thG);
    thead.appendChild(thO);
  
    for (var i = 0; i < 5; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 5; j++) {
        var td = document.createElement('td');
        if (i == 2 && j == 2) {
          td.innerText = "X";
          tr.appendChild(td);
        } else {
          td.innerText = cartela[j][i];
          tr.appendChild(td);
        }
      }
      tabela.appendChild(tr);
    }
  
    tabela.appendChild(thead);
    div.appendChild(tabela);
  }
  

function reiniciarJogo() {
    jogadores = [];
    
    var div = document.getElementById('espaco_cartelas');
    div.innerHTML = '';
  
    console.log("Jogo reiniciado!");
  }

function desenharNumero(){
    var div_bingo = document.getElementById('bingo');
    var span = document.createElement('span');
    span.innerText = numero;
    div_bingo.appendChild(span);
}

function sorteio(){
    if(jogadores.length < 2){
        alert('Você precisa de mais jogadores');
        return;
    }
    
    var intervalo = setInterval(function(){
        
        var aleatorio = math.floor(math.random()*75 + 1);
        while(numeros_sorteados.includes(aleatorio) == true){
            aleatorio = math.floor(math.random()*75 + 1);
        }
        numeros_sorteados.push(aleatorio);

        desenharNumero(aleatorio);

        var ganhadores = verificarGanhadores

        if(ganhadores.length > 0){
            alert(JSON.stringify(ganhadores));
            clearInterval(intervalo);
        }

    }, 1000);




}

function pintarSorteado(sorteado){
    
}

function verificarGanhadores(){

    var ganhadores = []

    if(numeros_sorteados.length < 25){
        return;
    }
    jogadores.forEach(function(jogador){
        for(var i = 0; i < 5; i ++){
           for(var j = 0;j < 5; j ++){
            for(var z = 0; z < numeros_sorteados.length; z++){
                if(numeros_sorteados[z] != jogador.cartela[i][j]){
                    ganhou = false;
                    break;
                }
            }
           }
        }
        ganhadores.push(jogador);
        });

        return ganhadores;


}
  
