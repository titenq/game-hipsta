class Inimigo extends Animacao {
  constructor(
    matriz, 
    imagem, 
    posicaoX, 
    variacaoY,
    largura, 
    altura, 
    larguraSprite, 
    alturaSprite, 
    velocidade) {

    super(
      matriz, 
      imagem, 
      posicaoX, 
      variacaoY, 
      largura, 
      altura, 
      larguraSprite, 
      alturaSprite);

    this.velocidade = velocidade;
  }

  move() {
    this.posicaoX -= this.velocidade;
  }

  aparece() {
    this.posicaoX = width;
  }
}
