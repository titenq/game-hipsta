class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    this.xInicial = 20;
  }

  exibe() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 60;
      
      image(imagemVida, width / 2 + margem, 20, 50, 42);
    }
  }

  ganhaVida() {
    if (this.vidas < this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }
}
