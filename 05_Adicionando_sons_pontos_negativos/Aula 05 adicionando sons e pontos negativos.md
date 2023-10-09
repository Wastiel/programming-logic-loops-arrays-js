# Aula 0. Adicionando sons e pontos negativos

## 01. Perdendo pontos
- Estmaos marcando pontos quando chegamos do outro lado.
- Agor aquando batemos, vamos fazer perder pontos.
- Criamos a função para nao diminuir pontos quando não se tem pontosw

````javascript
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
````

- Nao deixar o nosso ator ir para alem da tela.
- Fazemos uma validação para ele não poder sair da tela

````javascript
function podeSeMover(){
  return yAtor < 366;
}
````
## 02. Adicionando sons
- Adicionar sons para deixar o nosso jogo mais dinamico.
- Sons
	- Trilha sonora
	- Batida
	- Pontos
- Fizemos o upload dos sons
- Criamos as variaveis para receberem os sons
	- let somDaTrilha;
	- let somDaConlisao;
	- let somDoPonto;
- Adicionamos o som da trilha para ficar em loop no setup

```javascript
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}
```

- Adicionamos também o som da colisao no momento da colisao
````javascript
somDaColisao.play();
````
- Com isto o nosso jogo fica completo com todos os sons.

## 03. Faça como eu fiz na aula
- Ja fizemos. Por algum motivo no PC o som nao funciona. 

## 04. Um pouco mais sobre função
- Analisando o código

````javascript
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}
````
- Para criar uma função que retorna um valor em Javascript, usamos a palavra return, seguida pelo valor que queremos retornar.

- Uma função em Javascript pode ter um retorno ou não.

## 05. O que aprendemos?
- Criamos uma funçã meus pontos, para validar pontos
- Adicionamos trilha sonora. 
- [git alura projeto final](https://github.com/alura-cursos/freeway/archive/aula-5.zip)

## 06. Conclusão
- Conclusão do curso.

## 07. Parabéns
