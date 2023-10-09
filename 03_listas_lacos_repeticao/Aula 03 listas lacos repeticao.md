# Aula 03. Listas e laços de repetição

## 01. Criando listas
- Comportamento do jogo está legal.
- Codigo possui muitas variaveis para fazer a mesma coisa.
- Vamos utilizar listas
	- let yCarros = [40,96,150];
- Lista o primeiro elemento, indice 0
- Criamos vetor para tudo que controla o carro e refatoramos o nosso programa com as variaveis.

````javascript
//Codigo do carro

let xCarros = [600,600,600];
let yCarros = [40,96,150];
let velocidadeCarros = [2,3,2.5];


function mostraCarro(){
  image(imagemDoCarro1, xCarros[0], yCarros[0], 50, 40);
  image(imagemDoCarro2, xCarros[1], yCarros[1], 50, 40);
  image(imagemDoCarro3, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];  
  xCarros[1] -= velocidadeCarros[1]; 
  xCarros[2] -= velocidadeCarros[2]; 
}

function voltaPosicaoInicialDoCarro(){
  if(xCarros[0] < -50){
    xCarros[0] = 600;
  }
  if(xCarros[1] < -50){
    xCarros[1] = 600;
  }
  if(xCarros[2] < -50){
    xCarros[2] = 600;
  }
}
````

## 02. Laços de repetição
- Ainda temos muita repetição de codigo onde podemos utilizar laços de repetição.
- Ajustamos as imagens para um vetor
	-  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
- Muito código repetido.
- For, vamos utilizar para fazer repetição de código.
- Criamos a seguinte instrução de for e consguimos diminuir em muito nosso código.

````javascript
  for(i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);      
  }
````

## 03. Melhorando o código
- Melhorar a função que movimenta o carro. 
- Replicamos o nosso for para todo o nosso fonte.
- Criamos uma função para auxiliar neste refatoramento

````javascript
//Codigo do carro

let xCarros = [600,600,600];
let yCarros = [40,96,150];
let velocidadeCarros = [2,3,2.5];


function mostraCarro(){
  
  for(i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);      
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

## 04. Faça como eu fiz na aula
- Fiz acompanhando os videos e repliquei para o projeto direto no git (fora do P5)

## 05. Lista de palavras
- Para evitar uma quantidade grande de variaveis, podemos criar vetores
- temos o vetor abaixo:

````javascript
	let palavras = ["Dia", "programar", "javascript", "de"]
````

- Analisando o vetor:
- Para descobrir a quantidade de elementos de uma lista, podemos usar a palavra length.
- Podemos recuperar os valores dentro de uma lista através de índice.
- Podemos formar uma frase com o seguinte código: console.log(palavras[0],palavras[3],palavras[1],palavras[2])

## 06. O que aprendemos?
- No lugar de repetir muitas variaveis, criamos uma lista
- Removemos codigos dulicados
- Extraimos a verificação que identifica se o carro passou toda a tela.
- [Código do projeto Alura](https://github.com/guilhermeonrails/aula3-freeway/archive/aula3.zip)