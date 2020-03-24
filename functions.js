let mapDaFelicidadeOnline = new Map([
  ['iti malias', 'https://twitter.com/_iti_malia'],
  ['Eu Amo os Animais','https://twitter.com/_IloveAnimais_'],
  ['bichos triste fofo', 'https://twitter.com/BichosTriste']
]);

function imprimeContas(contas) {
    const podemosExecutarATransformacao = typeof contas === 'object';
    if (podemosExecutarATransformacao) {
      for (let item of contas.entries()) {
        const [usuario, link] = item;
  
        console.log(`Nome de usuário: ${usuario}, Link: ${link}`);
      }
    } else {
      console.log('Por favor, passe um Map como parâmetro da função');
    }
  }

imprimeContas(mapDaFelicidadeOnline);