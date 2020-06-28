class Animacao {
  constructor(
    matriz,
    imagem,
    posicaoX,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    
    this.matriz = matriz;
    this.imagem = imagem;
    this.posicaoX = posicaoX;
    this.variacaoY = variacaoY;
    this.posicaoY = height - altura - this.variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
  }

  exibe() { 
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    );

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
