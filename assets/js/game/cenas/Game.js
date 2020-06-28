class Game {

  constructor() {
    this.mapa = [];
    this.inimigoAtual = 0;
  }

  setup() {
    cenario1 = new Cenario(imagemCenario1, 8);
    cenario2 = new Cenario(imagemCenario2, 6);
    cenario3 = new Cenario(imagemCenario3, 4);
    cenario4 = new Cenario(imagemCenario4, 2);
    cenario5 = new Cenario(imagemCenario5, 0);

    vida = new Vida(3, 3);

    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      50,
      10,
      240,
      240,
      480,
      480
    );

    pontuacao = new Pontuacao();

    const inimigoMorcego = new Inimigo(
      matrizInimigoMorcego,
      imagemInimigoMorcego,
      width,
      100,
      133,
      105,
      534,
      419,
      20
    );

    const inimigoZumbi = new Inimigo(
      matrizInimigoZumbi,
      imagemInimigoZumbi,
      width,
      50,
      108,
      130,
      430,
      519,
      20
    );

    const inimigoZumboa = new Inimigo(
      matrizInimigoZumboa,
      imagemInimigoZumboa,
      width,
      50,
      130,
      144,
      521,
      576,
      20
    );

    const inimigoOrc = new Inimigo(
      matrizInimigoOrc,
      imagemInimigoOrc,
      width,
      50,
      150,
      150,
      400,
      400,
      20
    );

    inimigos.push(inimigoZumbi);
    inimigos.push(inimigoZumboa);
    inimigos.push(inimigoMorcego);
    inimigos.push(inimigoOrc);

    this.gerarMapa();
  }

  keyPressed() {
    if (keyCode === UP_ARROW) {
      if (personagem.pulos < 2) {
        somDoPulo.play();
      }
      personagem.pula();
    }
  }

  gerarMapa() {
    let velocidades = [10, 12, 14];
    let rounds = 20;
  
    while (rounds > 0) {
      let inimigoRandom = Math.floor(Math.random() * inimigos.length);
      let velocidadeRandom = velocidades[Math.floor(Math.random() * velocidades.length)];
  
      this.mapa.push({
        inimigo: inimigoRandom,
        velocidade: velocidadeRandom
      });
  
      rounds--;
    }
  
    return this.mapa;
  }

  draw() {
    cenario5.exibe();
    cenario4.exibe();
    cenario3.exibe();
    cenario2.exibe();

    cenario5.move();
    cenario4.move();
    cenario3.move();
    cenario2.move();
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    vida.exibe();
    
    personagem.exibe();
    personagem.aplicaGravidade();

    mapaAtual = this.mapa[this.inimigoAtual];
    
    const inimigo = inimigos[mapaAtual.inimigo];
    const inimigoVisivel = inimigo.posicaoX < -inimigo.largura;

    inimigo.velocidade = mapaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();
    
    if (inimigoVisivel) {
      this.inimigoAtual++;
      
      inimigo.aparece();
      
      if (this.inimigoAtual > this.mapa.length - 1) {
        this.inimigoAtual = 0;
      }
      
      if (mapaAtual.inimigo === 2) {
        let randomPosition = parseInt(random(1, 3));
        
        randomPosition > 1 ? inimigo.posicaoY = height - 300 : inimigo.posicaoY = height - 200;
      }
    }

    cenario1.exibe();
    cenario1.move();
    
    if (personagem.colidiu(inimigo)) {
      somDano.play();
      vida.perdeVida();
      personagem.tornarInvencivel();

      if (vida.vidas === 0) {
        somDoPulo.disconnect();
        somDoJogo.stop();
        cenaAtual = 'gameOver';
        somGameOver.play();
        
        pontos = parseInt(pontuacao.pontos);
        
        if (!localStorage.getItem('recorde') || localStorage.getItem('recorde') < pontos) {
          localStorage.setItem('recorde', pontos);
        }

        recorde = localStorage.getItem('recorde');
      }
    }

    // Para conseguir a precisão na colisão
    /* noFill();

    circle(personagem.posicaoX + 120, personagem.posicaoY + 120, 80);

    if (mapaAtual.inimigo === 0) {
      circle(inimigo.posicaoX + 60, inimigo.posicaoY + 60, 80);
    }

    if (mapaAtual.inimigo === 1) {
      circle(inimigo.posicaoX + 70, inimigo.posicaoY + 70, 80);
    }

    if (mapaAtual.inimigo === 2) {
      circle(inimigo.posicaoX + 70, inimigo.posicaoY + 50, 50);;
    }

    if (mapaAtual.inimigo === 3) {
      circle(inimigo.posicaoX + 80, inimigo.posicaoY + 70, 80);;
    } */
  }
}
