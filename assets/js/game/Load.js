class Load {
  static preload() {
    imagemCenario1 = loadImage('../../img/cenario/cenario1.png');
    imagemCenario2 = loadImage('./assets/img/cenario/cenario2.png');
    imagemCenario3 = loadImage('./assets/img/cenario/cenario3.png');
    imagemCenario4 = loadImage('./assets/img/cenario/cenario4.png');
    imagemCenario5 = loadImage('./assets/img/cenario/cenario5.png');

    imagemPersonagem = loadImage(
      './assets/img/personagem/personagem.png'
      );
    imagemPersonagemTelaInicial = loadImage(
      './assets/img/personagem/personagem-tela-inicial.png'
      );
    imagemPersonagemGameOver = loadImage(
      './assets/img/personagem/personagem-game-over.png'
      );

    imagemInimigoMorcego = loadImage('../../img/inimigos/morcego.png');
    imagemInimigoZumbi = loadImage('./assets/img/inimigos/zumbi.png');
    imagemInimigoZumboa = loadImage('./assets/img/inimigos/zumboa.png');
    imagemInimigoOrc = loadImage('./assets/img/inimigos/orc.png');

    imagemGameOver = loadImage('./assets/img/tela-game-over.png');
    imagemTelaInicial = loadImage('./assets/img/telaInicial.png');
    imagemVida = loadImage('./assets/img/coracao.png');
  
    somDoJogo = loadSound('./assets/audio/trilhaJogo.mp3');
    somDoJogo.setVolume(0.5);
    somDoPulo = loadSound('./assets/audio/somPulo.mp3');
    somGameOver = loadSound('./assets/audio/game-over.wav');
    somJogar = loadSound('./assets/audio/jogar.mp3');
    somDano = loadSound('./assets/audio/somDano.mp3');

    somGameOver.setVolume(0.5);
    somDano.setVolume(0.5);
  
    fontScore = loadFont('./assets/font/HennyPenny-Regular.ttf');
  }
}
