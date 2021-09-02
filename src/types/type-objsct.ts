//no object o type e inferido e não e possivel
// inserir propriedades de fora do objeto

//forma de tipa um object ? => opcional
const objectA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objectA.chaveA = 'XXXXX';
/**Isso e impossivel */
//objectA.chaveC = 'kkkk';
