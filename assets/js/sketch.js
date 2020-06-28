function preload() {
  Load.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  somDoJogo.loop();

  telaInicial = new TelaInicial();
  telaInicial.setup();

  game = new Game();
  game.setup();

  gameOver = new GameOver();
  gameOver.setup();

  cenas = {
    telaInicial,
    game,
    gameOver
  };
}

function keyPressed() {
  if (cenaAtual === 'telaInicial') {
    telaInicial.keyPressed();
  }
  
  if (cenaAtual === 'game') {
    game.keyPressed();
  }

  if (cenaAtual === 'gameOver') {
    gameOver.keyPressed();
  }
}

function draw() {
  cenas[cenaAtual].draw();
}
