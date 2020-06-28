class TelaInicial {

  setup() {
    personagemTelaInicial = new Personagem(
      matrizPersonagemTelaInicial,
      imagemPersonagemTelaInicial,
      width - 400,
      -40,
      480,
      480,
      480,
      480
    );
  }

  keyPressed() {
    if (keyCode === ENTER) {
      somJogar.play();
      cenaAtual = 'game';
    }
  }

  draw() {
    image(imagemTelaInicial, 0, 0, width, height);

    textAlign(CENTER);
    fill('#000');
    textFont(fontScore, 48);
    text('As Aventuras de', width / 2 + 5, 100);
    textSize(70);
    text('HIPSTA', width / 2 + 5, 200);
  
    fill('#fff');
    textFont(fontScore, 48);
    text('As Aventuras de', width / 2, 100);
    textSize(70);
    text('HIPSTA', width / 2, 200);

    personagemTelaInicial.exibe();
  }
}
