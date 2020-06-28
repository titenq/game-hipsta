class GameOver {

  setup() {
    personagemGameOver = new Personagem(
      matrizPersonagemGameOver,
      imagemPersonagemGameOver,
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
      document.location.reload(false);
    }
  }

  draw() {
    image(imagemGameOver, 0, 0, width, height);
    personagemGameOver.exibe();

    textAlign(CENTER);
    fill("#000");
    textFont(fontScore, 48);
    text("Pontuação:", 155, 100);
    text(pontos, 155, 150);
    text("Recorde:", 155, 250);
    text(recorde, 155, 300);

    fill("#fff");
    textFont(fontScore, 48);
    text("Pontuação:", 150, 100);
    text(pontos, 150, 150);
    text("Recorde:", 150, 250);
    text(recorde, 150, 300);
  }
}
