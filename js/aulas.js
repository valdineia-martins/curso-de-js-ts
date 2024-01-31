/*Tipos de dados primitivos*/ 
//String, number, undefined, null, boolean, symbol

const nome = 'Telmo' //string
const nome1 = 'Telmo' //string
const nome2 = 'Telmo' //string
const num1 = 10; //number
const num2 =  10.52 //number
let nomeAluno;//undefined = não aponta pra local nehum na memória
let sobrenomeAluno = null;//nulo = não aponta pra local nenhum na memoria
const aprovado = true;//Boolean = true, false (lógico) 

//console.log(typeof aprovado, aprovado);

/**
 * Operadores Aritméticos
 *  + Adição e Concatenação
 *  - Subtração
 *  * Multiplicação
 *  / Divisão
 *  ** Potenciação
 *  % Resto da Divisão
 * */ 

/* * Precedencias dos operadores 
   * () Parenteses
   * ** Potenciação
   * * / % Multiplicação, divisão e resto
   * + - Adição e subtração
*/

const num3 = 5;
const num4 = 2;
const num5 = 10;
//console.log('O resultado  é = ' + (num3 + num4) * num5);

/*Incremento = ++
/*Decremento = --
*/
//let contador = 1;
//contador++;//2
//contador++;//3
//contador++;//4
//contador++;//5
//console.log(contador);

const passo = 2;
let contador = 0;

contador += passo;
contador += passo;
contador += passo;
//console.log(contador);;

//NaN - NOT A NUMBER / parseInt (inteiro), ParseFloat (decimais) / number 

/*const num6 = 10;
const num7 =  parseFloat('5.2');

console.log(num6 * num7);
console.log(typeof num7, num7);*/

/*const num6 = 10;
const num7 =  parseInt('5');

console.log(num6 * num7);
console.log(typeof num7, num7);*/

const num6 = 10;
const num7 = Number('5');

console.log(num6 * num7);
console.log(typeof num7);
