# Aula 04. Colisao + carros e pontos

## 01. Criando a colisão
- Melhorar colisão, voltar para a posição inicial
- Vamos pegar uma solução pronta para melhorar a nossa colisão
- Vamos na libraries do p5 [Libraries](https://p5js.org/libraries/)
- Vamos pegar a biblioteca p5.collide2d.js - Está na raiz do projeto
- adicionar o mesmo ao nosso projeto
	
````javascript
<script src="p5.collide2d.js"></script>
````

- Criamos uma funcao verificaColisao
- E passamos os parametros necessários para ela funcionar

````javascript
colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
````

- Ciramos uma função colidiu para toda a vez que o ator bater nos carros, voltepara a posição inicial.

```javascript
function colidiu(){
  yAtor = 366;
}
```


## 02. Carros em todas as pistas
- O jogo tem colisao em todos os pontos
- Inserir carros em todas as páginas.
- Adicionamos as imagens do carro ao nosso vetor de imagens
	- imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
	- Ajustamos todas as posições com os novos carros
		- let xCarros = [600,600,600,600,600,600];
		- let yCarros = [40,96,150, 210, 270 , 318];
		- let velocidadeCarros = [2,3,2.5, 5, 3.3, 2.3];
- Com os ajustes que fizemos no programa, ficou melhor para controllar o carro e inserir novos carros
- refatoramos o for, utilizando i++
- Melhoramos a experiencia do nosso jogo, colocando carros em todas as faixas e refatoramos o for.

````javascript
//Codigo do carro

let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150, 210, 270 , 318];
let velocidadeCarros = [2,3,2.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  
  for(i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);      
  }  
}

function movimentaCarro(){
  
  for(i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }  
}

function voltaPosicaoInicialDoCarro(){
  
  for(i = 0; i < imagemCarros.length; i++){
  if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;}  
  } 
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}

````

## 03. Criando os pontos do jogo
- O jogo está bom, Quando o personagem chegano outro lado, temos que marcar pontos.
- Camos criar um ponto sempre que chegarmos ao final da rua. 
- Criamos a variavel meus pontos, iniciando com 0 e vamos mostrar ela na tela, dentro de uma função

````javascript
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width/5, 27 );
}
````

- Marcar pontos pela posição y, vaquinha chegou no y, marcamos o ponto.

````javascript
function marcaPontos(){
  if(yAtor < 15){
    meusPontos ++;
    voltaAtorParaPosicaoInicial();
  }
}
````

## 04. Faça como eu fiz na aula
- fui fazendo conforme os videos passavam.

## 05. Não marca pontos
- Temos o seguinte código

````javascript
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
}

````

- o código não está marcando pontos, pq?
- Porque a função marcaPonto() não está sendo executada.


## 06. O que aprendemos?
- Adicionamos uma biblioteca
- Adicionamos mais carros
- Adicionamos os pontos.
- [Link git jogo alura](https://github.com/alura-cursos/freeway/archive/aula-4.zip)