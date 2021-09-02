// forma de criar array
/**Array<T> - T[] */

//trabalhando com map, filter, reducer
const numeros: number[] = [5, 50, 8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//filter retorna um array de valor segundo uma condicao
//return == ou < o array
//filtrar
const nPar = numeros.filter((value: number) => {
  return value % 2 === 0;
});
console.log(nPar);

//map retona o mesmo numeros de entrada modificados
//alterar
//ele retorna um => value, indice
const dobleOne = nPar.map((value: number) => {
  return value * 2;
});
console.log(dobleOne);

//retorna a reducao do array com uma operacap
//reduzir
//ele retorna um => ac, value, indice, array
const soma1 = dobleOne.reduce((ac: number, valor: number) => {
  return ac + valor;
}, 0);
//posso receber um valor para o meu acomulador
console.log(soma1);

function multArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
function conct(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const resolt = multArgs(1, 2, 3);
