//e basicamente um object tipado que recebe um array
const dadosCliente1: [number, string] = [1, 'Iago'];
const dadosCliente2: readonly [number, string, ...string[]] = [1, 'Iago'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Debora';
console.log(dadosCliente1);
