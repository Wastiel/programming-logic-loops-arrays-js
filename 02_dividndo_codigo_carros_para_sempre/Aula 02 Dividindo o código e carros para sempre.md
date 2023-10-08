# Aula 02. Dividindo o código e carros para sempre

## 01. Dividindo código em arquivos
- Muias responsabilidades no mesmo arquivo.
- Arquivos para ator, carro e carregamento js
- Criamos o arquivo imagens.js
- Chamamos no index.html o arquivo que criamos para ele entender que está tudo conectado.
- Criamos um arquivo ator.js para colcoar tudo do ator. 
- Criamos um arquivo carro.js para organizarmos  tudo que é relacionado ao ator.

- ator.js
````javascript
//carro
let xAtor = 100
let yAtor = 366

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor +=3
  }
}

````

- carro.js
````javascript
//Codigo do carro
//carro
let xCarro = 600
let yCarro = 40


function mostraCarro(){
  image(imagemDoCarro1, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;  
}
````

- imagens.js
````javascript
// imagens do jogo
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
````

## 02. Adicionando mais carros
- Colocar mais 2 carros
- Replicamos a lógica que ja temos para o carro 2 e para o carro 3 (variaveis e chamada de imagnes)
- Melhoramos o nosso código para identificar a velocidade que queremos para cada carro. 
- Nossa função de carro adaptada ficou assim:

````javascript
//Codigo do carro


//carro 1
let xCarro = 600
let yCarro = 40
let velocidadeCarro1 = 2

//carro 2
let xCarro2 = 600
let yCarro2 = 96
let velocidadeCarro2 = 3

//carro 3
let xCarro3 = 600
let yCarro3 = 150
let velocidadeCarro3 = 2.5


function mostraCarro(){
  image(imagemDoCarro1, xCarro, yCarro, 50, 40);
  image(imagemDoCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemDoCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1;  
  xCarro2 -= velocidadeCarro2; 
  xCarro3 -= velocidadeCarro3; 
}
````

## 03. Carros para sempre
- Os carros vão em bora e não voltam.;
- Queremos que o carro volte. 
- Vamos trabalhar este ajuste no eixo X dos carros. 
- Criamos uma função para resetar a posição do carro após ele passar o eixo x zero.

````javascript
function voltaPosicaoInicialDoCarro(){
  if(xCarro < -50){
    xCarro = 600;
  }
  if(xCarro2 < -50){
    xCarro2 = 600;
  }
  if(xCarro3 < -50){
    xCarro3 = 600;
  }
}
````
- chamamos esta função no nosso arquivo sketch.js para a mesma voltar a posição dos carros.

## 04. Faça como eu fiz na aula
- Fui fazendo conforme videos.

## 05. Loop com mais carros
- Qual comportamento do código abaixo:

````javascript
function voltaPosicaoInicialDoCarro(){
  if (xCarro < 50){
    xCarro = 600
  }
  if (xCarro2 < 50){
    xCarro2 = 600
  }
  if (xCarro3 < 50){
    xCarro3 = 600
  }
}
````

- Os carros desaparecem antes de passar toda a tela.

## 06. O que aprendemos?
- Dividimos as responsabilidades do nosso programa
- Adicionamos mais carros
- Deixamos o jogo infinito paraos carros, eles voltam ao ponto inicial
- [Codigo da aula 02](https://github.com/alura-cursos/freeway/archive/aula-2.zip)