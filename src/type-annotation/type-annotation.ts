/* eslint-disable */
//na maioria das vezes na atribuicao vai haver inferencia
//const nome = 'Iago';
/**
 *let nome: string = 'iago;
 *let idade: number = 30;
 *let adulto: boolean = true;
 *let simbolo: symbol = Symbol('symbol');
 *let big: bigint = 10n;
 nesse caso vemos se foi inferido um type ou se esta como any,
 ai sim devemos fazer a annotation
 */


//Array
let arrayNumbers: Array<number> = [1,2,3];
let arrayStrings: Array<string> = ['1','2','3'];
//forma reduzida
let arrayNumbers2: number[] = [1,2,3];
let arrayStrings2: string[] = ['1','2','3'];

//Object
//para tornar a chave opcional colocamos o ponot de interrogacao '?'
let pessoa: {nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Iago',
}

//function
//            type parameter        type of function
function soma(x: number, y: number): number {
  return x + y;
}
//inferencia de type
const result = soma(2, 2);
//passando parametros por relise
const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
}
