// imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//criacao dos sons
let somDaTrilha;
let somDaConlisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("../imagens/estrada.png");
  
  imagemDoAtor = loadImage("../imagens/ator-1.png");
  
  imagemDoCarro1 = loadImage("../imagens/carro-1.png");
  
  imagemDoCarro2 = loadImage("../imagens/carro-2.png");
  
  imagemDoCarro3 = loadImage("../imagens/carro-3.png");
  
  //somDaTrilha = loadSound("trilha.mp3");
  //somDaColisao = loadSound("../imagens/sons/colidiu.mp3");
  //somDoPonto = loadSound("../imagens/sons/pontos.wav");
  
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  
}