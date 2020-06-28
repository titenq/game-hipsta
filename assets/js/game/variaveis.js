let game;
let telaInicial;
let gameOver;

let cenas;
let cenaAtual = 'telaInicial';

let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;

let imagemPersonagem;
let imagemPersonagemTelaInicial;
let imagemPersonagemGameOver;

let imagemInimigoMorcego;
let imagemInimigoZumbi;
let imagemInimigoZumboa;
let imagemInimigoOrc;

let imagemGameOver;
let imagemTelaInicial;
let imagemVida;

let cenario1;
let cenario2;
let cenario3;
let cenario4;
let cenario5;

let personagem;
let personagemTelaInicial;
let personagemGameOver;
let pontuacao;
let mapaAtual;

let somDoJogo;
let somDoPulo;
let somGameOver;
let somJogar;
let somDano;

let fontScore;
let vida;
let pontos;
let recorde;

const inimigos = [];

const matrizPersonagem = [
  [0, 0],
  [480, 0],
  [960, 0],
  [1440, 0],
  [1920, 0],
  [0, 480],
  [480, 480],
  [960, 480],
  [1440, 480],
  [1920, 480],
  [0, 960],
  [480, 960],
  [960, 960],
  [1440, 960],
  [1920, 960],
  [0, 1440],
  [480, 1440],
  [960, 1440],
  [1440, 1440],
  [1920, 1440],
  [0, 1920],
  [480, 1920],
  [960, 1920],
  [1440, 1920],
  [1920, 1920],
  [0, 2400],
  [480, 2400],
  [960, 2400],
];

const matrizPersonagemTelaInicial = [
  [0, 0],
  [480, 0],
  [960, 0],
  [1440, 0],
  [1920, 0],
  [0, 480],
  [480, 480],
  [960, 480],
  [1440, 480],
  [1920, 480],
  [0, 960],
  [480, 960],
  [960, 960],
  [1440, 960],
  [1920, 960],
  [0, 1440],
  [480, 1440],
];

const matrizInimigoMorcego = [
  [0, 0],
  [534, 0],
  [1068, 0],
  [0, 419],
  [534, 419],
  [1068, 419],
  [0, 838],
  [534, 838],
];

const matrizPersonagemGameOver = [
  [0, 0],
  [480, 0],
  [960, 0],
  [1440, 0],
  [1920, 0],
  [0, 480],
  [480, 480],
  [960, 480],
  [1440, 480],
  [1920, 480],
  [0, 960],
  [480, 960],
  [960, 960],
  [1440, 960],
  [1920, 960],
  [0, 1440],
  [480, 1440],
  [960, 1440],
  [1440, 1440],
  [1920, 1440],
];

const matrizInimigoZumbi = [
  [0, 0],
  [430, 0],
  [860, 0],
  [0, 519],
  [430, 519],
  [860, 519],
  [0, 1038],
  [430, 1038],
  [860, 1038],
  [0, 1557],
];

const matrizInimigoZumboa = [
  [0, 0],
  [521, 0],
  [1042, 0],
  [0, 576],
  [521, 576],
  [1042, 576],
  [0, 1152],
  [521, 1152],
  [1042, 1152],
  [0, 1728],
];

const matrizInimigoOrc = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
];
