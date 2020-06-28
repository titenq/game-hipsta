class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    textFont(fontScore, 52);
    fill("#fff");
    text(parseInt(this.pontos), width - 80, 80);
  }

  adicionarPonto() {
    this.pontos += 0.05;
  }
}
