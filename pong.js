//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25;
let raio = diametroBolinha / 2;

//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

// variáveis da raquete esquerda
let xRaqueteEsquerda = 10;
let yRaqueteEsquerda = 150;
let comprimentoRaqueteEsquerda = 10;
let alturaRaqueteEsquerda = 90;

// variáveis da raquete direita 
let xRaqueteDireita = 580;
let yRaqueteDireita = 150;
let comprimentoRaqueteDireita = 10;
let alturaRaqueteDireita = 90;

function setup() {
  createCanvas(600, 400);
}

function draw () {
  background(0);
  bolinha();
  movimentoBolinha();
  colisaoBordas();
  raqueteEsquerda ();
  raqueteDireita ();
  movimentoRaqueteEsquerda ();
  colisaoRaqueteEsquerda ();
 }

function bolinha () {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentoBolinha () {
  xBolinha += velocidadeXBolinha;
  //yBolinha += velocidadeYBolinha;
}

function colisaoBordas() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;    
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function raqueteEsquerda() {
  rect(xRaqueteEsquerda, yRaqueteEsquerda, comprimentoRaqueteEsquerda, alturaRaqueteEsquerda);
}

function raqueteDireita () {
  rect(xRaqueteDireita, yRaqueteDireita, comprimentoRaqueteDireita, alturaRaqueteDireita);
}

function movimentoRaqueteEsquerda () {
  if (keyIsDown(UP_ARROW)){
    yRaqueteEsquerda -= 10;
}
  if (keyIsDown (DOWN_ARROW)) {
    yRaqueteEsquerda += 10;
  }
}

function colisaoRaqueteEsquerda () {
  if (xBolinha - raio < xRaqueteEsquerda + comprimentoRaqueteEsquerda &&
      yBolinha - raio < yRaqueteEsquerda + alturaRaqueteEsquerda &&       
      yBolinha + raio > yRaqueteEsquerda) {
    velocidadeXBolinha *= -1
  }
}


