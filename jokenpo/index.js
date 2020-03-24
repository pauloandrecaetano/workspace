
const readline = require('readline');
let jogador;


function pegarJogador() {

    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    rl1.question('Vamos jogar!!! Qual seu nome?', jogador => {

        if (jogador === 'Dessa') {
            console.log(`Olá ${jogador}. Menina véia besta!!!`);
        }else if (jogador === 'Yasmin') {
            console.log(`Olá ${jogador}. Sua Idiota. Burra!!!`);
        } else{
            console.log(`Olá ${jogador}. Que nome lindo!!!`);
        }
        
    
        rl1.close();
    });
}

function jogar() {

    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl2.question('Qual sua jogada, pedra, papel ou tesoura ("FIM" para sair)? ', resposta => {

    const opcoes = {
        1: 'pedra',
        2: 'papel',
        3: 'tesoura'
    };
    const escolhaDoUsuario = resposta;
    const escolhaDoComputador = opcoes[Math.round(Math.random() * 2) + 1];

    console.log(`Eu escolho: ${escolhaDoComputador}`);

    if (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'tesoura') {
        console.log('Você GANHOUUU!');
    } else if (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'papel') {
        console.log('Você PERDEUUU!');
    } else if (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'pedra') {
        console.log('EMPATOUUU!');
    }

    if (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'pedra') {
        console.log('Você GANHOUUU!');
    } else if (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'tesoura') {
        console.log('Você PERDEUUU!');
    } else if (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'papel') {
        console.log('EMPATOUUU!');
    }

    if (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'papel') {
        console.log('Você GANHOUUU!');
    } else if (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'pedra') {
        console.log('Você PERDEUUU!');
    } else if (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'tesoura') {
        console.log('EMPATOUUU!');
    }

    rl2.close();
    });
}

pegarJogador();

//jogar();
