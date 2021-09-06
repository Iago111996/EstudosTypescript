// e um ant melhor
let x: unknown;

x = 100;
x = 'Liuz';

const y = 200;
//como x e do tipo unknown precisamos fazer checagem;
if (typeof x === 'number') console.log(x + y);
