class Personagem extends Animacao {
  constructor(matriz, imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.posicaoYInicial = height - this.altura - this.variacaoY;
    this.posicaoY = this.posicaoYInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.posicaoY += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.posicaoY > this.posicaoYInicial) {
      this.posicaoY = this.posicaoYInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

  colidiu(inimigo) {
    if (this.invencivel) {
      return false;
    }
  
    let inimigoCircle;

    if (mapaAtual.inimigo === 0) {
      inimigoCircle = [inimigo.posicaoX + 60, inimigo.posicaoY + 60, 80];
    }

    if (mapaAtual.inimigo === 1) {
      inimigoCircle = [inimigo.posicaoX + 70, inimigo.posicaoY + 70, 80];
    }

    if (mapaAtual.inimigo === 2) {
      inimigoCircle = [inimigo.posicaoX + 70, inimigo.posicaoY + 50, 50];
    }

    if (mapaAtual.inimigo === 3) {
      inimigoCircle = [inimigo.posicaoX + 80, inimigo.posicaoY + 70, 80];
    }

    const colisao = collideCircleCircle(
      this.posicaoX + 120, 
      this.posicaoY + 120, 
      80,
      ...inimigoCircle
    );
    
    return colisao;
  }
}
