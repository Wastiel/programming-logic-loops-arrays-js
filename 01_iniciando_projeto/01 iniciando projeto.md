# Aula 01. Introdução

## 01. Introdução
- Construir o jogo freeway
- Vamos aprender a dividir o nosso projeto
- listas
- repetição
- contadores
- funções

## 02. Preparando o ambiente
- Vamos utilizar a plataforma https://editor.p5js.org/
- Material grafico na pasta material na raiz do projeto

## 03. Como usar o fórum
- Recomendações da plataforma da alura
- [forum da alura]()

## 04. Background, carro e ator
- Vamos preparar o nosso projeto no ps5 carregando os materiais repassados no curso
- Temos uma function setup e uma function draw padrão do projeto (Padrões da biblioteca p5)

````javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
````
- Adicionamos as imagens ao projeto pelo menu lateralizado
- Aumentamos o tamanho do nosso canvas
- Adicionar algo dentro do computador, criando uma variavel.
- Vamos adicionar a imagem da estrada
````javascript
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
}
````
- Carregamos a imagem da nossa estrada com a função (Substituindo a atual)

````javascript
function draw() {
  background(imagemDaEstrada);
}
````
- Para as imagens aparecerem, temos que colocar elas dentro do draw.
- Agora vamos adicionar nosso ator
	- image(imagemDoAtor, 100, 366, 30, 30);
- Adicionar a imagem de um carro
	- image(imagemDoCarro1, 400, 40, 50, 40);
- Vamos inserindo informação e testamos.
- Próximo vídeo vamos dar vida ao nosso jogo

````javascript
//lembrando que este código é construido na plataforma p5*
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  
  imagemDoAtor = loadImage("imagens/ator-1.png");
  
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemDoCarro1, 400, 40, 50, 40);
  
}
````

## 05. Movimentando ator e carro
- Vamos movimentar o nosso carro
- Adicionamos uma lógica para sempara tudo por funcções. Criamos as seguintes funções:
	- mostraAtor();
	- mostraCarro();
	- movimentaCarro();
- Para executarmos estas funções, adicionamos todas as chamadas na nossa function draw.
- Vamos usar para movimentar o ator
	- Criamos uma função para movimentar o Ator movimentaAtor();
	- Utilizamos a seguinte regra dentro da função

````javascript
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor +=3
  }
}
````
- Temos muitos codigos de responsabilidades diferentes dentro da nossa chamada principal..


## 06. Faça como eu fiz na aula
- Construi conforme as aulas foram passando
- construi uma pagina html para rodaro meu projeto. Roda em live Server do VSCode.

## 07. Pressionando a tecla...
- O que o código abaixo faz?
````javascript
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor + 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor = yAtor - 3;
  }
}
````
- Quando a tecla seta para cima for pressionada, o personagem irá para baixo.
- Quando a tecla seta para baixo for pressionada, o personagem irá para cima.

## 08. O que aprendemos?
- Fizemos upload de imagnes 
- Criamos função movimentar
- Movimentamos nosso personagem
- Colocamos o fonte do programa localmente.
