// variáveis e constantes, quero exemplos. ok
/*

Variavei são espacos na memoria que guardam um valor, 
mas esses valores podem ser alterados.

contantes são espacos na memoria também , porem ao contrario das variaveis,
as constantes elas tem um valor fixo que nao podem mudar
*/

//exemplo variavel 1
var num = 10;
var num1 = 9;
var soma = num + num1;
document.write('exemplo 1 variavel :'+ soma + '<br>');
//exemplo constantes 1.1
// const num2 = 1000;
// num2 = 30; //vai dar erro pois uma constante ela nao pode ser alterada  

/*comandos de decisão, quero exemplos. 
os ifs e elses sao comandos do javaScript que tomam decisoes 
baseados no resutado logico da expressao.
*/
//exemplo 2 decisoes
if(num < num1){
    document.write(`O numero ${num} é menor que ${num1}`);
}
else{
    document.write(`exemplo 2 decisoes com if e else: O numero ${num} é maior que ${num1}`);
}

/*loops, quero exemplos. ok
loops sao estruturas de repeticoes , for e while ,
o for()ele testa a condicao for  verdade ele vai execultando,
ja o while e parecido com o for mas, o while ele so execulta enquando for verdade execulta,

*/
//exemplo 3 : loops
for(var i=0;i <= 5; i++){
    document.write(` exemplo For: numero ${i} <br>`);
}
// exemplo 3.1 : loops
var numero = 0;
while (numero <= 4) {
    document.write(`exemplo While ${numero}<br>`);
    numero++// diferente do for , o while precisa colocar o incremento detro da condicao.

}

//funções, quero exemplos. ok
// funcoes sao como container que para serem execultado precisa ser chamados
//exemplo funcao 4: funcao
function numeroParOuImpar(numero1){
    return (numero1 % 2 != 0)? 'Impar' : 'Par';
}
document.write('exemplo function : '+numeroParOuImpar(2)+'<br>');

//escopos, quero exemplos. ok
//  o escopo ele determina o que vai ser execultado, exemplo se uma variavel estiver no escopolo global ela ,
//vai ser execultado primeira, mas se ela estiver no escopo local ela so vai ser execultada se for chamada.

//exemplo escopos 5:

    var nome = 'maria '// essa variavel ela esta no escopo global entao ela vai ser execultada primeira. essa nao precisa ser chamada.

    function nomeDoJedi(){
    var nome = "joao"; // essa variavel ela esta no escopo local entao ela so vai ser execultada quando for chamada.
}


// inputs e outputs, quero exemplos. 
// inputs sao entradas de dados e outputs sao saidas de dados 

// exemplo inputs e outputs : 6

// document.prompt('input')
// console.log()//saida

// array, quero exemplos. 7
// array sao listas nao ordenadas de dados .

var array = ['nome','sobrenome']

// objetos, quero exemplos. 8
// o bejtos sao propriendade  

var carro = {// carro tem propriendades como marca, id etc
    marca:"Ford",
    id:1234
}
//(camelCase, PascalCase, kibab-case, snake_case)
//camelCase a primera letra de um frase e minuscula  e o inicio de uma outra frasa e maiuscula  exe : aulaDoProfessor
//PascalCase primeira letra maiuscula e a seunda frase com a priemra letra tbm em maiuscula exe: AulaDoProfessor.
//kibab-case escrever com o tracinho separando as frases e tdosas ela sao escritas em minusculas, padrao adotado pelo html.
//snake_case e parecido com o kibabde so que a diferenca e que ele usa um '_' para separar.

// 9 Diferença entre caminho absoluto e caminho relativo. 
// caminho relativo inicia a partir de algum diretório de trabalho fornecido, ja o absoluto ele aponta para mesma localização de um diretório .

// Diferença entre os operadores &&, ||, == e != 
// && ele so aceita se os dois valores forem verdaderios se um for false ele nao exe
// || se um dos valores forem verdadade ele aceita mesmo se o outro valor for false.
// == comprada se o valor e iguel a outro valor
// != compara se o valor e diferente do mesmo ou outro valor,


// O que é EPER, e para que serve.
// EPER é ultilizado para fazer uma organizacao de seu codigo , pra fazer compra vc faz um eper , priemiro vc cria uma lista com os nomes do produto , depois voce avalia 
//os precos , e depois de organizar voce vai comprar execultar , e depois que comprar antes de pagar vc revisa os demais intens da lista para saber se esta tudo certo.
// entender planejar , executar , revisar.

// Explique o que é Pilha e Fila, quero exemplos. 
// pilha e o primeiro que entra e o ultimo que sai, exe pilha de livro 
// fila o priemiro que entra e o priemiro que sai exe fila de banco.

// Explique com suas palavras qual a diferença entre html, javascript e css.7° 

//html e onde vai seer feita a parte do frontand , javascript onde fazemos os comandos para serem execultados no html, e css sao folhas de estilos , que usamos para deixar o html mais 'bonito'.
